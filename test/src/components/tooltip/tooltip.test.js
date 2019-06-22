import React from 'react';
import { Tooltip, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Tooltip Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Tooltip />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Tooltip />);

    describe('props', () => {
        describe('position', () => {
            it('left', () => {
            const className = "child";
            const child = <span className={className}></span>;

            const mountWrapper = mount(<Tooltip left>{child}</Tooltip>);
            const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
            childSpan.simulate('mouseover');
            const bubble = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'));
            expect(bubble).toHaveStyleRule('top', '50%');
            expect(bubble).toHaveStyleRule('right', '100%');
            expect(bubble).toHaveStyleRule('transform', 'translateY(-50%)');
            });

            it('top', () => {
                const className = "child";
                const child = <span className={className}></span>;
    
                const mountWrapper = mount(<Tooltip top>{child}</Tooltip>);
                const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
                childSpan.simulate('mouseover');
                const bubble = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'));
                expect(bubble).toHaveStyleRule('bottom', '100%');
                expect(bubble).toHaveStyleRule('left', '50%');
                expect(bubble).toHaveStyleRule('transform', 'translateX(-50%)');
            });

            it('right', () => {
                const className = "child";
                const child = <span className={className}></span>;
    
                const mountWrapper = mount(<Tooltip right>{child}</Tooltip>);
                const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
                childSpan.simulate('mouseover');
                const bubble = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'));
                expect(bubble).toHaveStyleRule('top', '50%');
                expect(bubble).toHaveStyleRule('left', '100%');
                expect(bubble).toHaveStyleRule('transform', 'translateY(-50%)');
            });

            it('bottom', () => {
                const className = "child";
                const child = <span className={className}></span>;
    
                const mountWrapper = mount(<Tooltip bottom>{child}</Tooltip>);
                const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
                childSpan.simulate('mouseover');
                const bubble = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'));
                expect(bubble).toHaveStyleRule('top', '100%');
                expect(bubble).toHaveStyleRule('left', '50%');
                expect(bubble).toHaveStyleRule('transform', 'translateX(-50%)');
            });
        });

        it('should have correct size passed as props', () => {
            const className = "child";
            const child = <span className={className}></span>;

            const mountWrapper = mount(<Tooltip small>{child}</Tooltip>);
            const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
            childSpan.simulate('mouseover');
            const bubble = mountWrapper.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'))
            .childAt(0).childAt(0);
            expect(bubble).toHaveStyleRule('font-size', '0.4em');

            const mountWrapper1 = mount(<Tooltip medium>{child}</Tooltip>);
            const childSpan1 = mountWrapper1.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
            childSpan1.simulate('mouseover');
            const bubble1 = mountWrapper1.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'))
            .childAt(0).childAt(0);
            expect(bubble1).toHaveStyleRule('font-size', '0.8em');

            const mountWrapper2 = mount(<Tooltip large>{child}</Tooltip>);
            const childSpan2 = mountWrapper2.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
            childSpan2.simulate('mouseover');
            const bubble2 = mountWrapper2.findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'))
            .childAt(0).childAt(0);
            expect(bubble2).toHaveStyleRule('font-size', '1.2em');
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            const className = "child";
            const child = <span className={className}></span>;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Tooltip {...props}>{child}</Tooltip>);
                    const childSpan = mountWrapper.findWhere(n => n.name() === 'span' && n.prop('onMouseOver') !== undefined);
                    childSpan.simulate('mouseover');
                    const bubble = mountWrapper
                    .findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-tooltip__bubble'))
                    .childAt(0).childAt(0);
                    expect(bubble).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});