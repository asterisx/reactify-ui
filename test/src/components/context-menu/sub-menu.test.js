import React from 'react';
import { SubMenu, Constants, SubMenuItem } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('SubMenu Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SubMenu />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<SubMenu />);

    describe('props', () => {
        it('should rearrange itself to within view when its not visible (i.e outside viewport)', () => {
            const childWidth = 100, 
                childHeight = 100,
                docWidth = 500,
                docHeight = 500;
            
            let top = -100,
                left = -100;
            
            global.innerWidth = docWidth;
            global.innerHeight = docHeight;
            
            const spy = sinon.spy(SubMenu, 'getPos');
            mount(<SubMenu><div style={{ width: childWidth, height: childHeight, top, left }}/></SubMenu>);
            expect(spy.called).toBeTruthy();
        });

        it('should map over items and generate TreeViewItems', () => {
            const items = [
                {text: 'Option 1', key: 0},
                {text: 'Option 2', key: 1},
                {text: 'Option 3', key: 2},
                {text: 'Option 4', key: 3},
            ];

            const mountWrapper = mount(<SubMenu items={items}></SubMenu>);
            const treeItems = mountWrapper.find(SubMenuItem);

            [0,1,2,3].forEach(
                val => Object.keys(items[val]).forEach(
                    (key) => { 
                        if(key !== 'key') expect(treeItems.at(val).props()[key]).toBe(items[val][key]);
                    }));
        });

        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<SubMenu className={someClass}></SubMenu>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        });

        describe('should drill down themes to sub menu', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<SubMenu {...props} items={[{key: 1}]} />);
                    const subMenuItem = mountWrapper.find(SubMenuItem);
                    expect(subMenuItem.props()[key]).toBeTruthy();
                });
            });
        });

    })
});