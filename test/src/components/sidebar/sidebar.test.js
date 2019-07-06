import React from 'react';
import { Constants, Sidebar, SidebarItem } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Sidebar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Sidebar />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Sidebar />);
    hasDisabledStyle(<Sidebar />);

    describe('props', () => {
        it('should map over items and generate TreeViewItems', () => {
            const items = [
                {text: 'Option 1', key: 0},
                {text: 'Option 2', key: 1},
                {text: 'Option 3', key: 2},
                {text: 'Option 4', key: 3},
            ];

            const mountWrapper = mount(<Sidebar items={items}></Sidebar>);
            const sidebarItems = mountWrapper.find(SidebarItem);

            [0,1,2,3].forEach(
                val => Object.keys(items[val]).forEach(
                    (key) => { 
                        if(key !== 'key') expect(sidebarItems.at(val).props()[key]).toBe(items[val][key]);
                    }));
        });

        it('should drill down positionFull to SidebarItem', () => {
            const mountWrapper = mount(
                <Sidebar positionFull>
                    <SidebarItem />
                </Sidebar>
                );
            const sidebarItem = mountWrapper.find(SidebarItem);
            expect(sidebarItem.props().positionFull).toBeTruthy();
        });
    });

    describe('should have correct theme when theme prop is passed', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(<Sidebar {...props} />);
                expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
            });
        });
    });
});