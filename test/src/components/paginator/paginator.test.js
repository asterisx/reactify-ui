import React from 'react';
import { Paginator, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Paginator Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Paginator noOfPages={20} />);
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<Paginator noOfPages={20} />);

    it('in non controlled mode should have correct value and call onChange with value', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(<Paginator noOfPages={20} onChange={spy}/>);
        expect(mountWrapper.state().currentPage).toBe(1);

        const value = 10;
        const input = mountWrapper.findWhere(n => n.name() === 'input');
        input.simulate("change", { target: { value } });
        expect(spy.called).toBeTruthy();
        expect(spy.firstCall.args[0].value).toBe(value);
        expect(mountWrapper.state().currentPage).toBe(value);
    });

    it('it should have value between 1 and noOfPages', () => {
        const noOfPages = 20;
        const spy = sinon.spy();
        const mountWrapper = mount(<Paginator noOfPages={20} onChange={spy}/>);
        expect(mountWrapper.state().currentPage).toBe(1);

        const randomBigValue = 100;
        const input = mountWrapper.findWhere(n => n.name() === 'input');
        input.simulate("change", { target: { value: randomBigValue } });
        expect(spy.called).toBeTruthy();
        expect(spy.firstCall.args[0].value).toBe(noOfPages);
        expect(mountWrapper.state().currentPage).toBe(noOfPages);

        const randomSmallValue = -10;
        input.simulate("change", { target: { value: randomSmallValue } });
        expect(spy.called).toBeTruthy();
        expect(spy.secondCall.args[0].value).toBe(1);
        expect(mountWrapper.state().currentPage).toBe(1);
    });

    describe('props', () => {
        it('passing isControlled should put the component in controlled mode and it should have correct value and call onChange with value', () => {
            const spy = sinon.spy();
            const mountWrapper = mount(<Paginator isControlled noOfPages={20} onChange={spy}/>);
            expect(mountWrapper.state().currentPage).toBe(1);
    
            const value = 10;
            const input = mountWrapper.findWhere(n => n.name() === 'input');
            input.simulate("change", { target: { value } });
            expect(spy.called).toBeTruthy();
            expect(spy.firstCall.args[0].value).toBe(value);
            expect(mountWrapper.state().currentPage).toBe(1);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Paginator noOfPages={10} {...props}></Paginator>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});