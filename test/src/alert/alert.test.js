import React from 'react';
import Alert from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

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
            expect(shallowWrapper.props().style['borderColor']).to.equal(color);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Alert disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;
        });

        it('should display the border direction correctly when direction prop is passed', () => {
            const shallowWrapper = shallow(<Alert direction="left"></Alert>);
            expect(shallowWrapper.hasClass('reactify-alert-border-left')).to.be.true;

            const shallowWrapper1 = shallow(<Alert direction={['left', 'right', 'top', 'bottom']}></Alert>);
            expect(shallowWrapper1.hasClass('reactify-alert-border-left')).to.be.true;
            expect(shallowWrapper1.hasClass('reactify-alert-border-right')).to.be.true;
            expect(shallowWrapper1.hasClass('reactify-alert-border-top')).to.be.true;
            expect(shallowWrapper1.hasClass('reactify-alert-border-bottom')).to.be.true;
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Alert theme="default" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Alert theme="dark" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Alert theme="light" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Alert theme="info" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Alert theme="warning" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Alert theme="danger" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Alert theme="success" />);
                expect(shallowWrapper.hasClass('reactify-alert-border--theme-success')).to.be.true;
            });
        })
    })
});