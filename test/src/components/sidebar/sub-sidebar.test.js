import React from 'react';
import { SubSidebar, SidebarItem } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('SubSidebar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SubSidebar />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<SubSidebar />);
    hasDisabledStyle(<SubSidebar />);

    describe('props', () => {
        describe('positionFull', () => {
            it('should be position absolutely when positionFull is passed', () => {
                const mountWrapper = mount(<SubSidebar positionFull />);
                expect(mountWrapper).toHaveStyleRule('position', 'absolute');
            });

            it('should display header when positionFull is passed', () => {
                const someHeader = 'some header';
                const mountWrapper = mount(<SubSidebar positionFull header={someHeader} />);
                expect(mountWrapper.text()).toEqual(expect.stringContaining(someHeader));
            });

            it('should call callback when header is clicked, when positionFull is passed', () => {
                const clickSpy = sinon.spy();
                const someHeader = 'some header';
                const mountWrapper = mount(<SubSidebar positionFull header={someHeader} onHeaderClick={clickSpy} />);
                const headerDiv = mountWrapper.findWhere(node => node.name() === 'div' && node.props().onClick);
                headerDiv.simulate('click');
                expect(clickSpy.called).toBeTruthy();
            });
        });

        it('should drill down positionFull to SidebarItem', () => {
            const mountWrapper = mount(
                <SubSidebar positionFull>
                    <SidebarItem />
                </SubSidebar>
                );
            const sidebarItem = mountWrapper.find(SidebarItem);
            expect(sidebarItem.props().positionFull).toBeTruthy();
        });
    });
});