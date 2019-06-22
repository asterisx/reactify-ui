import React from 'react';
import { GroupToggle, Button } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('GroupToggle Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <GroupToggle>
            {({ selectedIndex }) => <div index={0}/>}
        </GroupToggle>);
        expect(mountWrapper).toBeDefined();
    });

    it('selects index when selectedIndex props is passed', () => {
      const selectedIndex = 1;
      const mountWrapper = mount(
        <GroupToggle selectedIndex={selectedIndex}>
        {({ selectedIndex }) => (
          <>
            <Button index={0}/>
            <Button index={1}/>
            <Button index={2}/>
          </>
        )}
      </GroupToggle>
    );
    expect(mountWrapper.state().selectedIndex).toBe(selectedIndex);
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
            <GroupToggle onSelectionChange={spy}>
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
        
        const firstItem = items.at(2);
        firstItem.simulate('click');
        expect(spy.firstCall.args[0].index).toBe(2);

        const secondItem = items.at(1);
        secondItem.simulate('click');
        expect(spy.secondCall.args[0].index).toBe(1);
        
        const thirdItem = items.at(0);
        thirdItem.simulate('click');
        expect(spy.thirdCall.args[0].index).toBe(0);
    });
});