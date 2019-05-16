import React from 'react';
import { Text, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('NumberCounter Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Text />);
        expect(mountWrapper).toBeDefined();
    });

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const mountWrapper = mount(<Text>{childElem}</Text>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent.exists()).toBeTruthy();
    });

    describe('props', () => {
        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<Text style={{color: color}} />);
            const mainContainer = mountWrapper.childAt(0);
            expect(mainContainer.props().style.color).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<Text small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<Text medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<Text large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<Text style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Text {...props}/>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
});