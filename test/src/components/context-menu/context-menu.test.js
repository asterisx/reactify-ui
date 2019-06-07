import React from 'react';
import { ContextMenu, Constants, SubMenu } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('ContextMenu Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<ContextMenu />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<ContextMenu></ContextMenu>);

    describe('props', () => {
        it('should accept className propmount pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<ContextMenu className={someClass}></ContextMenu>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })

        it('should have correct size passed as props and should drill it to List Items', () => {
            const mountWrapper = mount(<ContextMenu small items={[]}/>);
            mountWrapper.find('div').simulate('contextmenu');
            const subMenu = mountWrapper.find(SubMenu);
            expect(subMenu).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<ContextMenu medium items={[]}/>);
            mountWrapper1.find('div').simulate('contextmenu');
            const subMenu1 = mountWrapper1.find(SubMenu);
            expect(subMenu1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<ContextMenu large items={[]}/>);
            mountWrapper2.find('div').simulate('contextmenu');
            const subMenu2 = mountWrapper2.find(SubMenu);
            expect(subMenu2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);
        });

        describe('should drill down themes to sub menu', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<ContextMenu {...props} items={[]} />);
                    mountWrapper.find('div').simulate('contextmenu');
                    const subMenu = mountWrapper.find(SubMenu);
                    expect(subMenu.props()[key]).toBeTruthy();
                });
            });
        })
    })
});