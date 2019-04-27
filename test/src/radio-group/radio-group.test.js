import React from 'react';
import { RadioGroup, RadioInput } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.should();
chai.use(chaiEnzyme())

describe('RadioGroup Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(
        <RadioGroup>
          <RadioInput label="option 1" index={0}></RadioInput>
          <RadioInput label="option 2" index={1}></RadioInput>
          <RadioInput label="option 3" index={2}></RadioInput>
        </RadioGroup>);
        expect(shallowWrapper).not.be.null;
    });

    it('should change selection index when children items clicked', () => {
        const mountWrapper = mount(
          <RadioGroup>
            <RadioInput label="option 1" index={0}></RadioInput>
            <RadioInput label="option 2" index={1}></RadioInput>
            <RadioInput label="option 3" index={2}></RadioInput>
          </RadioGroup>
        );

        const items = mountWrapper.find('.reactify-radio-group__container');
        
        const firstItem = items.childAt(0);
        firstItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).to.equal(0);

        const secondItem = items.childAt(1);
        secondItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).to.equal(1);
        
        const thirdItem = items.childAt(2);
        thirdItem.simulate('click');
        expect(mountWrapper.state().selectedIndex).to.equal(2);
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

        const items = mountWrapper.childAt(0);
        
        const firstItem = items.childAt(0);
        firstItem.simulate('click');
        expect(spy.firstCall.calledWithExactly(0)).to.be.true;

        const secondItem = items.childAt(1);
        secondItem.simulate('click');
        expect(spy.secondCall.calledWithExactly(1)).to.be.true;
        
        const thirdItem = items.childAt(2);
        thirdItem.simulate('click');
        expect(spy.thirdCall.calledWithExactly(2)).to.be.true;
    });
});