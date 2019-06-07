import React from 'react';
import { Slider, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Slider Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Slider value={10}/>);
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<Slider />);

    it('should automatically go in controlled mode when checked prop is passed', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(<Slider value={20} onChange={spy}/>);
        expect(mountWrapper.state().value).toBe(0);

        const value = 10;
        const input = mountWrapper.findWhere(n => n.name() === 'input');
        input.simulate("change", { target: { value } });
        expect(spy.called).toBeTruthy();
        expect(spy.firstCall.args[0].value).toBe(value);
        expect(mountWrapper.state().value).toBe(0);
    });

    describe('props', () => {
        it('should not allow to set value less than minAllowed and maxAllowed', () => {
            const minAllowed = 10;
            const mountWrapper = mount(<Slider value={0} minAllowed={minAllowed} />);
            const input = mountWrapper.find('input');
            expect(input.props().value).toBe(minAllowed);

            const maxAllowed = 80;
            const mountWrapper1 = mount(<Slider value={100} maxAllowed={maxAllowed} />);
            const input1 = mountWrapper1.find('input');
            expect(input1.props().value).toBe(maxAllowed);

            const mountWrapper2 = mount(<Slider defaultValue={0} minAllowed={minAllowed} />);
            const input2 = mountWrapper2.find('input');
            expect(input2.props().value).toBe(minAllowed);

            const mountWrapper3 = mount(<Slider defaultValue={100} maxAllowed={maxAllowed} />);
            const input3 = mountWrapper3.find('input');
            expect(input3.props().value).toBe(maxAllowed);
        });

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
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Slider value={10} {...props}></Slider>);
                    const input = mountWrapper.find('input');
                    expect(input.props().style.background).toEqual(expect.stringContaining(ThemeColors[key].color));
                });
            });
        });
    });
});