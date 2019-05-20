import React from 'react';
import { Label, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Label Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Label>Simple Label</Label>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Label></Label>);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Label className={someClass}></Label>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Label style={{backgroundColor:color}}/>);
            expect(mountWrapper.props().style.backgroundColor).toBe(color);
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Label small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Label medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Label large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Label style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        it('should have disabled class when disabled prop is pass', () => {
           /*  const mountWrapper = mount(<Label disabled={true} />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Label {...props}/>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        })
    })
});