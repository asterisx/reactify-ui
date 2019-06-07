import React from 'react';
import { Alert, Constants } from '@../../../../reactify/build';
import { shallow, mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Alert Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Alert />);
        expect(shallowWrapper).toBeDefined();
    });

    displaysChildren(<Alert />);

    hasDisabledStyle(<Alert />);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Alert className={someClass}></Alert>);
            expect(shallowWrapper.hasClass(someClass));
        })

        it('should have disabled class when disabled prop is passes', () => {
            const shallowWrapper = mount(<Alert disabled={true} />);
            expect(shallowWrapper).toHaveStyleRule('border-left', expect.any(String));
        });

        it('should display the border direction correctly when border props are+ passed', () => {
            const shallowWrapper = mount(<Alert borderLeft></Alert>);
            expect(shallowWrapper).toHaveStyleRule('border-left', expect.any(String));

            const shallowWrapper1 = mount(<Alert borderLeft borderRight borderTop borderBottom></Alert>);
            ['border-left', 'border-right', 'border-top', 'border-bottom'].forEach(borderType =>  
                expect(shallowWrapper1).toHaveStyleRule(borderType, expect.any(String))
            );
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const shallowWrapper = mount(<Alert {...props}></Alert>);
                    expect(shallowWrapper).toHaveStyleRule('border-color', ThemeColors[key].color);
                });
            });
        });
    });
});