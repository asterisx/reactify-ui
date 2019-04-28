import React from 'react';
import { Alert, Constants.defaultThemeColors as ThemeColors } from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import 'jest-styled-components'

chai.should();
chai.use(chaiEnzyme())

describe('Alert Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Alert />);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Alert>{childElem}</Alert>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Alert className={someClass}></Alert>);
            expect(shallowWrapper.hasClass(someClass));
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Alert color={color}/>);
            expect(shallowWrapper).toHaveStyleRule('border-color', color);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Alert disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;
        });

        it('should display the border direction correctly when direction prop is passed', () => {
            const shallowWrapper = shallow(<Alert borderLeft></Alert>);
            expect(shallowWrapper).toHaveStyleRule('border-left', expect.any(String));

            const shallowWrapper1 = shallow(<Alert borderLeft borderRight borderTop borderBottom></Alert>);
            expect(shallowWrapper).toHaveStyleRule('border-left', expect.any(String));
            expect(shallowWrapper).toHaveStyleRule('border-right', expect.any(String));
            expect(shallowWrapper).toHaveStyleRule('border-top', expect.any(String));
            expect(shallowWrapper).toHaveStyleRule('border-bottom', expect.any(String));
 
        describe('should have correct theme when theme prop is passed', () => {
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const shallowWrapper = shallow(<Alert {`${key}`}></Alert>);
                    expect(shallowWrapper).toHaveStyleRule('border-color', ThemeColors[key]);
                });
            });
        })
    })
});