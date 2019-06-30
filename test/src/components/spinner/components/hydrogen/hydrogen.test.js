import React from 'react';
import { Spinner, Constants } from '../../../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Hydrogen Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner hydrogen/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have custom animation duration when prop is passed', () =>{
            const animationDuration = "1s";
            const mountWrapper = mount(<Spinner hydrogen style={{animationDuration}} />);
            const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration));
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner hydrogen {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('border', expect.stringContaining(ThemeColors[key].color));
                    expect(spinnerSpan).toHaveStyleRule('background-color', expect.stringContaining(ThemeColors[key].color), { target: ':before'});
                    expect(spinnerSpan).toHaveStyleRule('background-color', expect.stringContaining(ThemeColors[key].color), { target: ':after'});
                });
            });
        });
    });
});