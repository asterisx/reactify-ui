import React from 'react';
import { Paper, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Paper Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Paper>Some Text</Paper>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Paper></Paper>);

    describe('props', () => {
        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Paper small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Paper medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Paper large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Paper style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        it('should not have a schadow when noShadow props is passed', () => {
            const mountWrapper = mount(<Paper small noShadow/>);
            expect(mountWrapper.findWhere(n => n.name() === 'div')).not.toHaveStyleRule('box-shadow', expect(String.any));
        })
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Paper {...props}>Some Text</Paper>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});