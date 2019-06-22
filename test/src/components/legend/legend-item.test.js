import React from 'react';
import { LegendItem, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('LegendItem Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<LegendItem />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<LegendItem />);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<LegendItem className={someClass}></LegendItem>);
            expect(mountWrapper.hasClass(someClass));
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<LegendItem iconColor={color}/>);
            const icon = mountWrapper.find('.reactify-ui-legend-item__icon').at(1);
            expect(icon.props().style['backgroundColor']).toBe(color);
        });

        it('should have label when label prop is passed', () => {
            const text = "some text";
            const mountWrapper = mount(<LegendItem>{text}</LegendItem>);
            expect(mountWrapper.text()).toBe(text);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<LegendItem {...props}/>);
                    const icon = mountWrapper.find('.reactify-ui-legend-item__icon').at(1);
                    expect(icon).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        })
    })
});