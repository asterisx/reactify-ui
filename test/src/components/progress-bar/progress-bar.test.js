import React from 'react';
import { ProgressBar, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('ProgressBar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<ProgressBar percentage={0}/>);
        expect(mountWrapper).toBeDefined();
    })


    describe('props', () => {
        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<ProgressBar to={10000} disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should have stripes when striped is passed', () => {
            // TODO 
           // Currently not possible with toHaveStyleRule
        })

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<ProgressBar percentage={0} small />);
            const progressDiv = mountWrapper.findWhere(n => n.name() === 'div' && !n.hasClass('reactify-ui-progress-bar__progress'));
            expect(progressDiv).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<ProgressBar percentage={0} medium />);
            const progressDiv1 = mountWrapper1.findWhere(n => n.name() === 'div' && !n.hasClass('reactify-ui-progress-bar__progress'));
            expect(progressDiv1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<ProgressBar percentage={0} large />);
            const progressDiv2 = mountWrapper2.findWhere(n => n.name() === 'div' && !n.hasClass('reactify-ui-progress-bar__progress'));
            expect(progressDiv2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<ProgressBar percentage={0} style={{fontSize: fontSize}} />);
            const progressDiv3 = mountWrapper3.findWhere(n => n.name() === 'div' && !n.hasClass('reactify-ui-progress-bar__progress'));
            expect(progressDiv3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<ProgressBar percentage={0} {...props}></ProgressBar>);
                    const progressDiv = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-progress-bar__progress'));
                    expect(progressDiv).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});