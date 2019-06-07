import React from 'react';
import { SubMenu, Constants, SubMenuItem } from '@../../../../reactify/build';
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

    displaysChildren(<SubMenu></SubMenu>);

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

        it('should accept className propmount pass it to the root container', () => {
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