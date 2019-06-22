import React from 'react';
import { Badge, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Badge Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Badge />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Badge></Badge>);

    hasDisabledStyle(<Badge></Badge>);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Badge className={someClass}></Badge>);
            expect(mountWrapper.hasClass(someClass));
        });

        describe('Badge Bubble', () => {
            it('renders correctly', () => {
                const mountWrapper = mount(<Badge.Bubble />);
                expect(mountWrapper).toBeDefined();
            })
            it('should display children prop passed', () => {
                let someClass = "someClass";
                let childElem = <div className={someClass}></div>;
                const mountWrapper = mount(<Badge.Bubble>{childElem}</Badge.Bubble>);
                const childContent = mountWrapper.find(`.${someClass}`);
                expect(childContent).toBeDefined();
            })
            it('should have correct color passed as props', () => {
                let color = "red";
                const mountWrapper = mount(<Badge.Bubble style={{backgroundColor: color}}/>);
                expect(mountWrapper.props().style.backgroundColor).toBe(color);
            });
    
            it('should have correct count passed as props', () => {
                let content = "10";
                const mountWrapper = mount(<Badge.Bubble>{content}</Badge.Bubble>);
                expect(mountWrapper.text()).toBe(content);
            });
            it('should have correct size passed as props', () => {
                const mountWrapper = mount(<Badge.Bubble small />);
                expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);
    
                const mountWrapper1 = mount(<Badge.Bubble medium />);
                expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);
    
                const mountWrapper2 = mount(<Badge.Bubble large />);
                expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);
    
                const fontSize = "40px";
                const mountWrapper3 = mount(<Badge.Bubble style={{fontSize: fontSize}} />);
                expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
            });
            it('should display the position correctly when position prop is passed', () => {
                const mountWrapper = mount(<Badge.Bubble topLeft></Badge.Bubble>);
                expect(mountWrapper).toHaveStyleRule('position', 'absolute');
                expect(mountWrapper).toHaveStyleRule('top', '0px');
                expect(mountWrapper).toHaveStyleRule('left', '0px');
    
                const mountWrapper1 = mount(<Badge.Bubble topRight></Badge.Bubble>);
                expect(mountWrapper1).toHaveStyleRule('position', 'absolute');
                expect(mountWrapper1).toHaveStyleRule('top', '0px');
                expect(mountWrapper1).toHaveStyleRule('right', '0px');
    
    
                const mountWrapper2 = mount(<Badge.Bubble bottomRight></Badge.Bubble>);
                expect(mountWrapper2).toHaveStyleRule('position', 'absolute');
                expect(mountWrapper2).toHaveStyleRule('bottom', '0px');
                expect(mountWrapper2).toHaveStyleRule('right', '0px');
    
                const mountWrapper3 = mount(<Badge.Bubble bottomLeft></Badge.Bubble>);
                expect(mountWrapper3).toHaveStyleRule('position', 'absolute');
                expect(mountWrapper3).toHaveStyleRule('bottom', '0px');
                expect(mountWrapper3).toHaveStyleRule('left', '0px');
            });
     
            describe('should have correct theme when theme prop is passed', () => {
                let ThemeColors = Constants.defaultThemeColors;
                Object.keys(ThemeColors).map(key => {
                    it(`${key} theme`, () => {
                        const props = {};
                        props[key] = true;
                        const mountWrapper = mount(<Badge.Bubble {...props}></Badge.Bubble>);
                        expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                        expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    });
                });
            });
        });
    })
});