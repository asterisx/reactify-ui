import React from 'react';
import { Link, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Link Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Link />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Link />);

    hasDisabledStyle(<Link />);

    describe('props', () => {
        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<Link style={{color: color}} />);
            const mainContainer = mountWrapper.childAt(0);
            expect(mainContainer.props().style.color).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Link small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Link medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Link large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Link style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Link {...props}/>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
});