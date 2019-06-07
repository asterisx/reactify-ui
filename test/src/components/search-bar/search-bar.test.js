import React from 'react';
import { SearchBar, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('SearchBar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SearchBar/>);
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<SearchBar />);

    describe('props', () => {
        it('should accept placeholder text', () => {
            const placeholder = 'some placeholder';
            const mountWrapper = mount(<SearchBar placeholder={placeholder} />);
            const input = mountWrapper.find('input');
            expect(input.props().placeholder).toBe(placeholder);
        });

        it('should call onChange handler when text is entered', () => {
            const inputValue = 'some value';
            const onChangeSpy = sinon.spy();
            const mountWrapper = mount(<SearchBar onChange={onChangeSpy} />);
            const input = mountWrapper.find('input');
            input.simulate('change', { target: { value: inputValue } });
            expect(onChangeSpy.firstCall.args[0].value).toBe(inputValue);
        });

        it('should automatically go in controlled mode when checked prop is passed', () => {
            const onChangeSpy = sinon.spy();
            const value = 'some value';
            const mountWrapper = mount(<SearchBar value={value} onChange={onChangeSpy}/>);
            expect(mountWrapper.state().value).toBe('');
    
            const newValue = 'new value';
            const input = mountWrapper.findWhere(n => n.name() === 'input');
            input.simulate("change", { target: { value: newValue } });
            expect(onChangeSpy.called).toBeTruthy();
            expect(onChangeSpy.firstCall.args[0].value).toBe(newValue);
            expect(mountWrapper.state().value).toBe('');
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet";
            const mountWrapper = mount(<SearchBar style={{color: color}} />);
            const mainContainer = mountWrapper.childAt(0);
            expect(mainContainer.props().style.color).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<SearchBar small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<SearchBar medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<SearchBar large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<SearchBar style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<SearchBar {...props}></SearchBar>);
                    const icon = mountWrapper.findWhere(n => n.name() === 'FaSearch')
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
});