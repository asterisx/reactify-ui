import React from 'react';
import { Button, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Button Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Button>Simple Button</Button>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Button></Button>);

    hasDisabledStyle(<Button></Button>);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Button className={someClass}></Button>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })
        
        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Button style={{backgroundColor: color}}/>);
            expect(mountWrapper.props().style.backgroundColor).toBe(color);
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Button small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Button medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Button large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Button style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Button {...props}></Button>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
                });
            });
        });

        describe('should have correct clear theme when clear and theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Button clear {...props}></Button>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color,  { target: ':hover' });
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor,  { target: ':hover' });
                });
            });
        });

        describe('should have correct clear theme when clear, bordered and theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Button clear bordered {...props}></Button>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('border-color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color,  { target: ':hover' });
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor,  { target: ':hover' });
                });
            });
        });
    });
});