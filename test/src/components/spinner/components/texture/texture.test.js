import React from 'react';
import { Spinner, Constants } from 'reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Texture Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner texture/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have custom animation duration when prop is passed', () =>{
            const animationDuration = "1s";
            const mountWrapper = mount(<Spinner texture style={{animationDuration}} />);
            const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration));
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner texture {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('border', expect.stringContaining(ThemeColors[key].color));
                    expect(spinnerSpan).toHaveStyleRule('background', expect.stringContaining(ThemeColors[key].color));
                });
            });
        });
    });
});