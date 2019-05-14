import React from 'react';
import { Dropdown, ListPanel, Constants, Portal } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';

expect.extend(matchers);

describe('Dropdown Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Dropdown />);
        expect(mountWrapper).toBeDefined();
    })

    it("should display children prop passed", () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} />;
        const mountWrapper = mount(<Dropdown>{childElem}</Dropdown>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    });

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
            expect(mountWrapper.state().isTrayOpen).toBeTruthy();
            expect(mountWrapper.find(ListPanel)).toBeDefined();
        });

        it('should call dropdown onSelectionChange when listpanel item is clicked', () => {
            const someClass = 'someClass';
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(<Dropdown className={someClass} onSelectionChange={selectionCallback}><Dropdown.Item index={1}></Dropdown.Item></Dropdown>);
            mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass(someClass)).simulate('click');
            mountWrapper.find(ListPanel.Item).simulate('click');
            expect(selectionCallback.called).toBeTruthy();
        });

        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<Dropdown disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

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

    describe('Dropdown.Item Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<Dropdown.Item index={1}/>);
            expect(mountWrapper).toBeDefined();
        });

        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<Dropdown.Item>{childElem}</Dropdown.Item>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });

        
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
});