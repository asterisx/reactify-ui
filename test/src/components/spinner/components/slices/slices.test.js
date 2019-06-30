import React from 'react';
import { Spinner, Constants } from '../../../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { rgba } from 'polished';

expect.extend(matchers);

describe('Spinner Slices Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner slices/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have custom animation duration when prop is passed', () =>{
            const animationDuration = "1s";
            const mountWrapper = mount(<Spinner slices style={{animationDuration}} />);
            const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration));
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner slices {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('border-top', expect.stringContaining(rgba(ThemeColors[key].color, 0.75)));
                    expect(spinnerSpan).toHaveStyleRule('border-left', expect.stringContaining(rgba(ThemeColors[key].color, 0.25)));
                    expect(spinnerSpan).toHaveStyleRule('border-bottom', expect.stringContaining(rgba(ThemeColors[key].color, 0.25)));
                    expect(spinnerSpan).toHaveStyleRule('border-right', expect.stringContaining(rgba(ThemeColors[key].color, 0.25)));
                });
            });
        });
    });
});