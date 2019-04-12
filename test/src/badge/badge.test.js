import React from 'react';
import Badge from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Radio Input Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Badge />);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Badge>{childElem}</Badge>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Badge className={someClass}></Badge>);
            expect(shallowWrapper.hasClass(someClass));
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Badge color={color}/>);
            expect(shallowWrapper.hasClass('reactify-Badge-border--theme-custom'));
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Badge disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });

        it('should display the border direction correctly when direction prop is passed', () => {
            const shallowWrapper = shallow(<Badge direction="left"></Badge>);
            expect(shallowWrapper.hasClass('reactify-Badge-border-left'));

            const shallowWrapper1 = shallow(<Badge direction={['left', 'right', 'top', 'bottom']}></Badge>);
            expect(shallowWrapper1.hasClass('reactify-Badge-border-left'));
            expect(shallowWrapper1.hasClass('reactify-Badge-border-right'));
            expect(shallowWrapper1.hasClass('reactify-Badge-border-top'));
            expect(shallowWrapper1.hasClass('reactify-Badge-border-bottom'));
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge--theme-default'));
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-dark'));
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-light'));
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-info'));
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-warning'));
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-danger'));
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                expect(shallowWrapper.hasClass('reactify-Badge-border--theme-success'));
            });
        })
    })
});