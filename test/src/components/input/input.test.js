import React from 'react';
import { Input, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Input Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Input />);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have custom color when color prop is passed', () => {
            const color = "violet";
            const mountWrapper = mount(<Input style={{borderColor: color}} />);
            const mainContainer = mountWrapper.childAt(0);
            expect(mainContainer.props().style.borderColor).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Input small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Input medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Input large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Input style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Input {...props}/>);
                    expect(mountWrapper).toHaveStyleRule('border-color', ThemeColors[key].color);
                });
            });
        });
    });
});