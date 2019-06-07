import React from 'react';
import { ListPanel, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('ListPanel.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<ListPanel.Item index={1}/>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<ListPanel.Item></ListPanel.Item>);

    hasDisabledStyle(<ListPanel.Item />)

    it('calls callback', () => {
        const onClickCallback = sinon.spy();
        const mountWrapper = mount(<ListPanel.Item onClick={onClickCallback}  index={1}/>);
        mountWrapper.simulate('click');
        expect(onClickCallback.called).toBeTruthy();
    });

    it('should have border when border prop is passed', () => {
        const mountWrapper = mount(<ListPanel.Item bordered index={1}/>);
        expect(mountWrapper).toHaveStyleRule('border-top', '1px solid darkgray');

        const mountWrapper1 = mount(<ListPanel.Item bordered={false}  index={1}/>);
        expect(mountWrapper1).not.toHaveStyleRule('border-top', '1px solid darkgray');
    });

    it('should have selected when selected prop is passed', () => {
        const mountWrapper = mount(<ListPanel.Item selected index={1}/>);
        expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors.primary.color));

        const mountWrapper1 = mount(<ListPanel.Item selected={false} index={1}/>);
        expect(mountWrapper1).not.toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors.primary.color));
    });

    it('should have custom color when color prop is passed', () => {
        const color = "violet"
        const mountWrapper = mount(<ListPanel.Item style={{backgroundColor: color}} index={1}/>);
        expect(mountWrapper.props().style['backgroundColor']).toBe(color);
    });

    it('should have correct size passed as props and should drill it to List Items', () => {
        const mountWrapper = mount(<ListPanel.Item small index={0}/>);
        expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

        const mountWrapper1 = mount(<ListPanel.Item medium index={0}/>);
        expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

        const mountWrapper2 = mount(<ListPanel.Item large index={0}/>);
        expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

        const fontSize = "40px";
        const mountWrapper3 = mount(<ListPanel.Item style={{fontSize: fontSize}} index={0}/>);
        expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
    });

    describe('should have correct theme when theme prop is passed', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(<ListPanel.Item {...props} index={0}></ListPanel.Item>);
                expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
            });
        });
    });
});