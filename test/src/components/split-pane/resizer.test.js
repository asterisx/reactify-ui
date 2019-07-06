import React from 'react';
import { Resizer, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Resizer Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Resizer />);
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<Resizer />);

    describe('props', () => {
        it('it returns null and consoles an error when children passed is not a function', () => {
            console.error = jest.fn();
            const mountWrapper = mount(<Resizer>Some Random Value</Resizer>);
            expect(console.error).toHaveBeenCalled();
            expect(mountWrapper).toEqual({});
        });

        it('calls onMouseDown event handler correctly', () => {
            const spy = sinon.spy();
            const mountWrapper = mount(<Resizer onMouseDown={spy} />);
            mountWrapper.find('span').at(0).simulate('mousedown');
            mountWrapper.find('span').at(0).simulate('touchStart');
            expect(spy.callCount).toBe(2);
        });

        it('returns a resizer when no children is passed', () => {
            const mountWrapper = mount(<Resizer />);
            expect(mountWrapper.find('span').at(0)).toBeDefined();
        });

        it('has vertical styling when vertical prop is passed', () => {
            const mountWrapper = mount(<Resizer vertical/>);
            expect(mountWrapper.find('span')).toHaveStyleRule('width', '100%');
        });
    });

    describe('should have correct theme when theme prop is passed', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(<Resizer {...props}></Resizer>);
                expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
            });
        });
    });
});