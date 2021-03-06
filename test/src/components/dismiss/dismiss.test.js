import React from 'react';
import { Dismiss, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Dismiss Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Dismiss />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<Dismiss></Dismiss>);

    hasDisabledStyle(<Dismiss></Dismiss>);

    it('should display custom icons', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const mountWrapper = mount(<Dismiss icon={childElem}></Dismiss>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent.exists()).toBeTruthy();

        const mountWrapper1 = mount(<Dismiss closeIcon={childElem}></Dismiss>);
        const childContent1 = mountWrapper1.find(`.${someClass}`);
        expect(childContent1.exists()).toBeTruthy();
    });

    describe('props', () => {
        it('should accept className propmount pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Dismiss className={someClass}></Dismiss>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })

        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Dismiss style={{backgroundColor: color}} />);
            expect(mountWrapper.props().style.backgroundColor).toBe(color);
        });

        it('should dismiss after delay and also call onClose', () => {
            const onCloseSpy = sinon.spy();
            const mountWrapper = mount(<Dismiss onClose={onCloseSpy} onClose={onCloseSpy} />);
            mountWrapper.findWhere(n => n.name() === 'IoIosClose').simulate('click');
            expect(onCloseSpy.called).toBeTruthy();
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Dismiss {...props}></Dismiss>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        })
    })
});