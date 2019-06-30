import React from 'react';
import { Dropdown, Portal } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Dropdown Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Dropdown />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Dropdown />);

    hasDisabledStyle(<Dropdown />);

    it('can accept anything as label', () => {
        const someClass = 'someClass';
        const labelSpan = <span className={someClass}></span>
        const mountWrapper = mount(<Dropdown label={labelSpan} />);
        const label = mountWrapper.findWhere(n => n.name() === 'span' && n.hasClass(someClass));

        expect(label).toBeDefined();
    });

   

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