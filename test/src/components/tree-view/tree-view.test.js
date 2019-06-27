import React from 'react';
import { Constants, TreeView, TreeViewItem } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { displaysChildren } from '../../helpers';

describe('TreeView Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<TreeView />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<TreeView />);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<TreeView className={someClass}></TreeView>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        });

        it('should map over items and generate TreeViewItems', () => {
            const items = [
                {text: 'Option 1', key: 0},
                {text: 'Option 2', key: 1},
                {text: 'Option 3', key: 2},
                {text: 'Option 4', key: 3},
            ];

            const mountWrapper = mount(<TreeView items={items}></TreeView>);
            const treeItems = mountWrapper.find(TreeViewItem);

            [0,1,2,3].forEach(
                val => Object.keys(items[val]).forEach(
                    (key) => { 
                        if(key !== 'key') expect(treeItems.at(val).props()[key]).toBe(items[val][key]);
                    }
                )
            );
        });

        describe('should drill down themes to tree view item', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TreeView {...props} items={[{text: 'Option 1', key: 0}]} />);
                    const treeViewItem = mountWrapper.find(TreeViewItem);
                    expect(treeViewItem.props()[key]).toBeTruthy();
                });
            });
        });

    })
});