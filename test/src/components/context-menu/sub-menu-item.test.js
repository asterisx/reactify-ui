import React from 'react';
import { Constants, SubMenu, SubMenuItem } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { darken } from 'polished';
import sinon from 'sinon';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('SubMenuItem Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SubMenuItem />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<SubMenuItem />);

    it('should show menu when hovered', () => {
        const mountWrapper = mount(<SubMenuItem><SubMenu /></SubMenuItem>);
        mountWrapper.find('li').simulate('mouseover');
        expect(mountWrapper.find(SubMenu)).toBeDefined();
    });

    it('should show call onmousedown handler', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(<SubMenuItem onMouseDown={spy} />);
        mountWrapper.find('li').simulate('mousedown');
        expect(spy.called).toBeTruthy();
    });

    describe('props', () => {
        it('should display text when passed', () => {
            let text = 'some text';
            const mountWrapper = mount(<SubMenuItem text={text} />);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(text));
        });
        
        it('should display icon when passed', () => {
            let icon = 'some icon';
            const mountWrapper = mount(<SubMenuItem icon={icon} />);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(icon));
        });
        
        it('should display arrow when subMenu is passed', () => {
            const mountWrapper = mount(<SubMenuItem><SubMenu /></SubMenuItem>);
            expect(mountWrapper.findWhere(n => n.name() === 'FaAngleRight')).toBeDefined();
        });
        
        it('should display content when passed and not display icon, text and arrow', () => {
            let text = 'some text';
            let icon = 'some icon';
            let content = 'some content';
            const mountWrapper = mount(
                <SubMenuItem 
                    text={text}
                    icon={icon}
                    content={content}
                >
                    <SubMenu />
                </SubMenuItem>);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(content));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(text));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(icon));
            expect(mountWrapper.findWhere(n => n.name() === 'FaAngleRight')).toEqual({});
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<SubMenuItem {...props} index={0} />);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
                });
            });
        });
    })
});