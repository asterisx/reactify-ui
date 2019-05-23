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
    });

    it('can accept anything as label', () => {
        const someClass = 'someClass';
        const labelSpan = <span className={someClass}></span>
        const selectionCallback = sinon.spy();
        const mountWrapper = mount(<Dropdown label={labelSpan} />);
        const label = mountWrapper.findWhere(n => n.name() === 'span' && n.hasClass(someClass));

        expect(label).toBeDefined();
    });

    displaysChildren(<Dropdown></Dropdown>);

    it('should the dropdown be closed when the fixed div is clicked', () => {
        const mountWrapper = mount(<Dropdown trayOpen/>);
        expect(mountWrapper.state().isTrayOpen).toBeTruthy();

        const div = mountWrapper.findWhere(n => n.name() === 'div').at(1);
        console.log(div.debug());
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
    });

    describe('props', () => {
        it('should accept trayOpen props and reflect it in state', () => {
            const mountWrapper = mount(<Dropdown trayOpen/>);
            expect(mountWrapper.state().isTrayOpen).toBeTruthy();
        });

        it('should openTray when dropdown is clicked', () => {
            const mountWrapper = mount(<Dropdown />);
            mountWrapper.find('div').at(0).simulate('click');
            setTimeout(() => {
                expect(mountWrapper.state().isTrayOpen).toBeTruthy();
            }, 0);
        });
    });
});