import React from 'react';
import { Accordion, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Accordion.Header Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion.Header />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion.Header />);

    hasDisabledStyle(<Accordion.Header />);

    it('should call callback when its clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <Accordion.Header toggleItem={spy}/>
        );
        mountWrapper.simulate('click');
        expect(spy.called).toBeTruthy();
    });

    it('should hide icon when showIcon is false', () => {
        const mountWrapper = mount(<Accordion.Header showIcon={false}/>);
        const icon = mountWrapper.findWhere(n => n.name() === 'FaPlus');
        expect(icon).toBeDefined();
    });

    it('should use custom icon when passed', () => {
        const classname = 'someCustomIcon';
        const icon = <span className={classname}></span>;
        const mountWrapper = mount(<Accordion.Header icon={icon} />);
        const customIcon = mountWrapper.find(`.${classname}`);
        expect(customIcon).toBeDefined();
    });

    describe('should have correct theme when theme prop is passed', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(<Accordion.Header {...props}></Accordion.Header>);
                expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
            });
        });
    });
});
