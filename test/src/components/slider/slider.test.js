import React from 'react';
import { Slider, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('Slider Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Slider value={10}/>);
        expect(mountWrapper).toBeDefined();
    })


    describe('props', () => {
        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<Slider to={10000} disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should not allow to set value less than minAllowed and maxAllowed', () => {
            const minAllowed = 10;
            const mountWrapper = mount(<Slider value={0} minAllowed={minAllowed} />);
            expect(mountWrapper.state().currValue).toBe(minAllowed);

            const maxAllowed = 80;
            const mountWrapper2 = mount(<Slider value={100} maxAllowed={maxAllowed} />);
            expect(mountWrapper2.state().currValue).toBe(maxAllowed);
        })

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Slider value={0} small />);
            const input = mountWrapper.findWhere(n => n.name() === 'input');
            expect(input).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Slider value={0} medium />);
            const input1 = mountWrapper1.findWhere(n => n.name() === 'input');
            expect(input1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Slider value={0} large />);
            const input2 = mountWrapper2.findWhere(n => n.name() === 'input');
            expect(input2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Slider value={0} style={{fontSize: fontSize}} />);
            const input3 = mountWrapper3.findWhere(n => n.name() === 'input');
            expect(input3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            //TODO not possibly currently to pass a func toHaveStyleRule for checking
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Slider value={10} {...props}></Slider>);
                    const progressDiv = mountWrapper.findWhere(n => n.name() === 'input');
                    // expect(progressDiv).toHaveStyleRule('background', ThemeColors[key].color);
                });
            });
        });
    });
});