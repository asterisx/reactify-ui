import React from 'react';
import { RadioInput, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Radio Input Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<RadioInput />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<RadioInput></RadioInput>);

    hasDisabledStyle(<RadioInput></RadioInput>);

    it('defaults to unchecked state', () => {
        const mountWrapper = mount(<RadioInput />);
        expect(mountWrapper.state().checked).toBeFalsy();
    });

    it('should be checked when defaultChecked prop is passed', () => {
        const mountWrapper = mount(<RadioInput defaultChecked={true}/>);
        expect(mountWrapper.state().checked).toBeTruthy();
    })

    it('should change state when clicked', () => {
        const mountWrapper = mount(<RadioInput defaultChecked/>);
        mountWrapper.simulate('click');
        expect(mountWrapper.state().checked).toBeTruthy();
    });

    it('should automatically go in controlled mode when checked prop is passed', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(<RadioInput checked={true} onChange={spy}/>);
        expect(mountWrapper.state().checked).toBeFalsy();

        const input = mountWrapper.find('input');
        input.simulate("change", { target: { checked: true } });
        expect(spy.called).toBeTruthy();
        expect(spy.firstCall.args[0].checked).toBeTruthy();
        expect(mountWrapper.state().checked).toBeFalsy();
    });

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<RadioInput className={someClass}></RadioInput>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<RadioInput iconColor={color} checked/>);
            const radioInput = mountWrapper.find('.reactify-ui-radio-input__icon').at(1);
            expect(radioInput.props().style['color']).toBe(color);

        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<RadioInput small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<RadioInput medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<RadioInput large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<RadioInput style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

      
        hasDisabledStyle(<RadioInput></RadioInput>);
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<RadioInput {...props}></RadioInput>);
                    const radioInput = mountWrapper.find('.reactify-ui-radio-input__icon');
                    expect(radioInput).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        })
    })
});