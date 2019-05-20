import React from 'react';
import { Dropdown, ListPanel, Constants, Portal } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Dropdown.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Dropdown.Item index={1}/>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Dropdown.Item></Dropdown.Item>);
    
    it('should accept ListPanel Item props and drill it to ListPanel Item', () => {
        const props = {
            primary: false,
            secondary: false,
            dark: false,
            light: false,
            info: false,
            warning: false,
            danger: false,
            success: false,
            small: false,
            medium: false,
            large: false,
            bordered: false,
            selected: false,
            index: 0,
            disabled: false,
        };
        const someClass = 'someClass';
        const mountWrapper = mount(<Dropdown className={someClass}><Dropdown.Item {...props}/></Dropdown>);
        mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass(someClass)).simulate('click');
        const listPanelItem = mountWrapper.find(ListPanel.Item);
        Object.entries(props).forEach((key, value) => expect(listPanelItem.props[key] === value));
    })
});