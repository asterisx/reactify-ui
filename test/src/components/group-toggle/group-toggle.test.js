import React from 'react';
import { GroupToggle, Button } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('GroupToggle Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <GroupToggle>
            {({ selectedIndex }) => <div />}
        </GroupToggle>);
        expect(mountWrapper).toBeDefined();
    });

    it('should change selection index when children items clicked', () => {
        const mountWrapper = mount(
            <GroupToggle>
            {({ selectedIndex }) => (
              <>
                <Button index={0}/>
                <Button index={1}/>
                <Button index={2}/>
              </>
            )}
          </GroupToggle>
        );

        const items = mountWrapper.find(Button);
        
        const firstItem = items.at(0);
        firstItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).toBe(0);

        const secondItem = items.at(1);
        secondItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).toBe(1);
        
        const thirdItem = items.at(2);
        thirdItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).toBe(2);
    });

    it('should call onSelectionChange with index when children items clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <GroupToggle onSelectionChange={index => spy(index)}>
            {({ selectedIndex }) => (
              <>
                <Button index={0}/>
                <Button index={1}/>
                <Button index={2}/>
              </>
            )}
          </GroupToggle>
        );

        const items = mountWrapper.find(Button);
        
        const firstItem = items.at(0);
        firstItem.simulate('click');
        expect(spy.firstCall.calledWithExactly(0)).toBeTruthy();

        const secondItem = items.at(1);
        secondItem.simulate('click');
        expect(spy.secondCall.calledWithExactly(1)).toBeTruthy();
        
        const thirdItem = items.at(2);
        thirdItem.simulate('click');
        expect(spy.thirdCall.calledWithExactly(2)).toBeTruthy();
    });
});