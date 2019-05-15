import React from 'react';
import { Spinner, Constants } from 'reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Clock Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner clock/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner clock {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('border', expect.stringContaining(ThemeColors[key].color));
                    expect(spinnerSpan).toHaveStyleRule('border-left', expect.stringContaining(ThemeColors[key].color), { target: ':before'});
                });
            });
        });
    });
});