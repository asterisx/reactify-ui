import React from 'react';
import { Chips, Chip, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Chips Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Chips />);
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<Chips></Chips>);

    it("should display children prop passed", () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} />;
        const mountWrapper = mount(<Chips >{childElem}</Chips>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    });

    describe('Chip Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<Chip />);
            expect(mountWrapper).toBeDefined();
        });

        hasDisabledStyle(<Chip></Chip>);
    
        it('calls callback', () => {
            const onClickCallback = sinon.spy();
            const mountWrapper = mount(<Chip onCloseClick={onClickCallback}/>);
            mountWrapper.findWhere(n => n.name() === 'svg').simulate('click');
            expect(onClickCallback.called).toBeTruthy();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<Chip >{childElem}</Chip>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });
    
        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<Chip style={{backgroundColor: color}}/>);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });
    
        it('should have correct size passed as props and should drill it to List Items', () => {
            const mountWrapper = mount(<Chip small/>);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);
    
            const mountWrapper1 = mount(<Chip medium/>);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);
    
            const mountWrapper2 = mount(<Chip large/>);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);
    
            const fontSize = "40px";
            const mountWrapper3 = mount(<Chip style={{fontSize: fontSize}}/>);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });
    
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Chip {...props}></Chip>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
})

