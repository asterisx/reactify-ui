import React from 'react';
import { Timer, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

const millisOfSomeDistantPast = Date.now() - (1000 * 5 * 30);

describe('Timer Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast}/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should start the timer on mount', () => {
            const clock = sinon.useFakeTimers();
            const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast} />);
            const spy = sinon.spy(mountWrapper.instance(), 'updateMillis');
            clock.tick(1001);
            expect(spy.calledOnce).toBeTruthy();
        });
        
        it('should have custom color when color prop is passed', () => {
            const color = "violet";
            const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast} style={{color: color}} />);
            const mainContainer = mountWrapper.findWhere(n => n.name() === 'div' && n.props() && n.props().style && n.props().style.color && n.props().style.color === color);
            expect(mainContainer).toBeDefined();
        });

        it('should not show days, hours, minutes, seconds when props are passed', () => {
            const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast} showDays={false} />);
            expect(mountWrapper.text().indexOf('days') < 0).toBeTruthy();

            const mountWrapper1 = mount(<Timer milliseconds={millisOfSomeDistantPast} showHours={false} />);
            expect(mountWrapper1.text().indexOf('hours') < 0).toBeTruthy();

            const mountWrapper2 = mount(<Timer milliseconds={millisOfSomeDistantPast} showMinutes={false} />);
            expect(mountWrapper2.text().indexOf('minutes') < 0).toBeTruthy();

            const mountWrapper3 = mount(<Timer milliseconds={millisOfSomeDistantPast} showSeconds={false} />);
            expect(mountWrapper3.text().indexOf('seconds') < 0).toBeTruthy();
        })

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast} small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Timer milliseconds={millisOfSomeDistantPast} medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Timer milliseconds={millisOfSomeDistantPast} large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Timer milliseconds={millisOfSomeDistantPast} style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Timer milliseconds={millisOfSomeDistantPast} {...props}></Timer>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
});