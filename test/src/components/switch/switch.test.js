import React from 'react';
import { Switch, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Switch Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Switch />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Switch />);

    hasDisabledStyle(<Switch />);

    it('defaults to unchecked state', () => {
        const mountWrapper = mount(<Switch />);
        const switchInput = mountWrapper.find('.reactify-ui-switch__icon').at(1);
        expect(switchInput.props().checked).toBeFalsy();
    });

    it('should be checked when checked prop is passed', () => {
        const mountWrapper = mount(<Switch checked={true}/>);
        const switchInput = mountWrapper.find('.reactify-ui-switch__icon').at(1);
        expect(switchInput.props().checked).toBeTruthy();
    })

    it('should change state when clicked', () => {
        const mountWrapper = mount(<Switch />);
        const switchInput = mountWrapper.find('.reactify-ui-switch__icon').at(1);
        switchInput.simulate('click');
        expect(switchInput.props().checked).toBeFalsy();
    });

    it('should automatically go in controlled mode when checked prop is passed', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(<Switch checked={true} onChange={spy}/>);
        expect(mountWrapper.state().checked).toBeFalsy();

        const input = mountWrapper.find('input');
        input.simulate("change", { target: { checked: true } });
        expect(spy.called).toBeTruthy();
        expect(spy.firstCall.args[0].checked).toBeTruthy();
        expect(mountWrapper.state().checked).toBeFalsy();
    });

    describe('props', () => {
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Switch iconColor={color} checked/>);
            const checkbox = mountWrapper.find('.reactify-ui-switch__icon').at(1);
            expect(checkbox.props().style.color).toBe(color);
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Switch small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Switch medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Switch large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Switch style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
           //TODO its the ::after which recieves the color prop
        })
    })
});