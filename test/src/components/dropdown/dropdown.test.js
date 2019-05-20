import React from 'react';
import { Dropdown, ListPanel, Constants, Portal } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Dropdown Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Dropdown />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<Dropdown></Dropdown>);

    describe('breakpoints', () => {
        it('sm', () => {
            const mountWrapper = mount(<Dropdown sm/>);
            mountWrapper.setState({screenIsSm: true, isTrayOpen: true});
            expect(mountWrapper.find(Portal)).toBeDefined();
            
        });
        it('md', () => {
            const mountWrapper = mount(<Dropdown md/>);
            mountWrapper.setState({screenIsMd: true, isTrayOpen: true});
            expect(mountWrapper.find(Portal)).toBeDefined();
        });
        it('lg', () => {
            const mountWrapper = mount(<Dropdown lg/>);
            mountWrapper.setState({screenIsLg: true, isTrayOpen: true});
            expect(mountWrapper.find(Portal)).toBeDefined();
        });
        it('xl', () => {
            const mountWrapper = mount(<Dropdown xl/>);
            mountWrapper.setState({screenIsXl: true, isTrayOpen: true});
            expect(mountWrapper.find(Portal)).toBeDefined();
        });
    })

    describe('props', () => {
        it('should accept trayOpen props and reflect it in state', () => {
            const mountWrapper = mount(<Dropdown trayOpen/>);
            expect(mountWrapper.state().isTrayOpen).toBeTruthy();
        });

        it('should openTray when dropdown is clicked', () => {
            const someClass = 'someClass';
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(<Dropdown className={someClass}><Dropdown.Item index={1}></Dropdown.Item></Dropdown>);
            mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass(someClass)).simulate('click');
            setTimeout(() => {
                expect(mountWrapper.state().isTrayOpen).toBeTruthy();
                expect(mountWrapper.find(ListPanel)).toBeDefined();
            }, 0);
        });

        it('should call dropdown onSelectionChange when listpanel item is clicked', () => {
            const someClass = 'someClass';
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(<Dropdown className={someClass} onSelectionChange={selectionCallback}><Dropdown.Item index={1}></Dropdown.Item></Dropdown>);
            mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass(someClass)).simulate('click');
            setTimeout(() => {
                mountWrapper.find(ListPanel.Item).simulate('click');
                expect(selectionCallback.called).toBeTruthy();
            }, 0);
        });

        hasDisabledStyle(<Dropdown></Dropdown>);

        it('should accept ListPanel props and drill it to ListPanel', () => {
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
                singular: false,
                multiple: false,
                disabled: false,
                onSelectionChange: () => {}
            };
            const someClass = 'someClass';
            const mountWrapper = mount(<Dropdown className={someClass} {...props}/>);
            mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass(someClass)).simulate('click');
            const listPanel = mountWrapper.find(ListPanel);
            Object.entries(props).forEach((key, value) => expect(listPanel.props[key] === value));
        })
    });
});