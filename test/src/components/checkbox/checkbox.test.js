import React from 'react';
import { Checkbox, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Checkbox Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Checkbox />);
        expect(mountWrapper).toBeDefined();
    });

    it('defaults to unchecked state', () => {
        const mountWrapper = mount(<Checkbox />);
        expect(mountWrapper.state().checked).toBeFalsy();
    });

    it('should be checked when checked prop is passed', () => {
        const mountWrapper = mount(<Checkbox checked />);
        expect(mountWrapper.state().checked).toBeTruthy();
    });

    it('should change state when clicked', () => {
        const mountWrapper = mount(<Checkbox />);
        mountWrapper.simulate('click');
        expect(mountWrapper.state().checked).toBeTruthy();
    });
    
    displaysChildren(<Checkbox></Checkbox>);

    hasDisabledStyle(<Checkbox></Checkbox>);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Checkbox className={someClass}></Checkbox>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Checkbox iconColor={color} checked/>);
            const checkbox = mountWrapper.find('.reactify-ui-checkbox__icon').at(1);
            expect(checkbox.props().style['color']).toBe(color);
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Checkbox small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Checkbox medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Checkbox large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Checkbox style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Checkbox {...props}></Checkbox>);
                    const checkbox = mountWrapper.find('.reactify-ui-checkbox__icon');
                    expect(checkbox).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        })
    })
});