import React from 'react';
import { Spinner, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Spinner Balls Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Spinner balls/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('should have custom animation duration when prop is passed', () =>{
            const animationDuration = "1s";
            const mountWrapper = mount(<Spinner balls style={{animationDuration}} />);
            const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration));
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration), { target: ':before' });
            expect(spinnerSpan).toHaveStyleRule('animation', expect.stringContaining(animationDuration), { target: ':before' });
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Spinner balls {...props}></Spinner>);
                    const spinnerSpan = mountWrapper.findWhere(n => n.name() === 'span');
                    expect(spinnerSpan).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});