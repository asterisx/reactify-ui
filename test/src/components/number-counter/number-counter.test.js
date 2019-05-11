import React from 'react';
import { NumberCounter, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('NumberCounter Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<NumberCounter to={10000}/>);
        expect(mountWrapper).toBeDefined();
    })


    describe('props', () => {
        //TODO change dynamically, interval, delay, onChange, onComplete

        it('should start the timer on mount', () => {
            const clock = sinon.useFakeTimers();
            const mountWrapper = mount(<NumberCounter to={10000}/>);
            const spy = sinon.spy(mountWrapper.instance(), 'updateTicker');
            clock.tick(11);
            expect(spy.calledOnce).toBeTruthy();
        });

        it('should call reset function when reset called from children', () => {
            let resetPointer = () => {};
            const mountWrapper = mount(<NumberCounter from={0} to={10000}>{(reset) => { resetPointer = reset; return <span>Children</span>}}</NumberCounter>);
            const spy = sinon.spy(mountWrapper.instance(), 'reset');
            resetPointer();
            setTimeout(() => {
                expect(spy.called).toBeTruthy();
            }, 0);
        });

        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<NumberCounter to={10000} disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<NumberCounter to={10000} style={{color: color}} />);
            const mainContainer = mountWrapper.childAt(0);
            expect(mainContainer.props().style.color).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<NumberCounter from={0} to={100} small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<NumberCounter from={0} to={100} medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<NumberCounter from={0} to={100} large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<NumberCounter from={0} to={100} style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<NumberCounter from={0} to={100} {...props}></NumberCounter>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
});