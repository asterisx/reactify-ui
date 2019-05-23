import React from 'react';
import { RadioGroup, RadioInput } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('RadioGroup Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <RadioGroup>
          <RadioInput label="option 1" index={0}></RadioInput>
          <RadioInput label="option 2" index={1}></RadioInput>
          <RadioInput label="option 3" index={2}></RadioInput>
        </RadioGroup>);
        expect(mountWrapper).toBeDefined();
    });

    it('should change selection index when children items clicked', () => {
        const mountWrapper = mount(
          <RadioGroup>
            <RadioInput label="option 1" index={0}></RadioInput>
            <RadioInput label="option 2" index={1}></RadioInput>
            <RadioInput label="option 3" index={2}></RadioInput>
          </RadioGroup>
        );

        const items = mountWrapper.find('input');
        
        const firstItem = items.at(0);
        firstItem.simulate('change');
        expect(mountWrapper.state().selectedIndex).toBe(0);

        const secondItem = items.at(1);
        secondItem.simulate('change');
        expect(mountWrapper.state().selectedIndex).toBe(1);
        
        const thirdItem = items.at(2);
        thirdItem.simulate('change');
        expect(mountWrapper.state().selectedIndex).toBe(2);
    });

    it('should call onSelectionChange with index when children items clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
          <RadioGroup onSelectionChange={index => spy(index)}>
            <RadioInput label="option 1" index={0}></RadioInput>
            <RadioInput label="option 2" index={1}></RadioInput>
            <RadioInput label="option 3" index={2}></RadioInput>
          </RadioGroup>
        );

        const items = mountWrapper.find('input');
        
        const firstItem = items.at(0);
        firstItem.simulate('change');
        expect(spy.firstCall.calledWithExactly(0)).toBeTruthy();

        const secondItem = items.at(1);
        secondItem.simulate('change');
        expect(spy.secondCall.calledWithExactly(1)).toBeTruthy();
        
        const thirdItem = items.at(2);
        thirdItem.simulate('change');
        expect(spy.thirdCall.calledWithExactly(2)).toBeTruthy();
    });
});