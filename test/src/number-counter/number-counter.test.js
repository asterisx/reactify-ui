import React from 'react';
import { NumberCounter } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.should();
chai.use(chaiEnzyme())

describe('NumberCounter Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<NumberCounter />);
        expect(shallowWrapper).not.be.null;
    })


    describe('props', () => {
        //TODO change dynamically, interval, delay

        it('should call reset function when reset called from children', () => {
            const resetPointer;
            const mountWrapper = mount(<NumberCounter from={0} to={10000}>{(reset) => resetPointer = reset}</NumberCounter>);
            const spy = sinon.spy(mountWrapper.instance(), 'reset');
            resetPointer();
            expect(spy.called).to.be.true;
        });

        it('should have disabled class when disabled prop is passed', () => {
            const shallowWrapper = shallow(<NumberCounter disabled />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;;
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const shallowWrapper = shallow(<NumberCounter color={color} />);
            const mainContainer = shallowWrapper.childAt(0);
            expect(mainContainer).to.have.style('color', color)
        
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<NumberCounter size="small" />);
            const mainContainer = shallowWrapper.childAt(0);
            expect(mainContainer.hasClass('reactify-number-counter--size-small')).to.be.true;

            const shallowWrapper1 = shallow(<NumberCounter size="medium" />);
            const mainContainer1 = shallowWrapper1.childAt(0);
            expect(mainContainer1.hasClass('reactify-number-counter--size-medium')).to.be.true;

            const shallowWrapper2 = shallow(<NumberCounter size="large" />);
            const mainContainer2 = shallowWrapper2.childAt(0);
            expect(mainContainer2.hasClass('reactify-number-counter--size-large')).to.be.true;

            const fontSize = "40px";
            const shallowWrapper3 = shallow(<NumberCounter size={fontSize} />);
            const mainContainer3 = shallowWrapper3.childAt(0);
            expect(mainContainer3.props().style['fontSize']).to.equal(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="default" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="dark" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="light" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="info" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="warning" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="danger" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<NumberCounter  theme="success" />);
                const mainContainer = shallowWrapper.childAt(0);
                expect(mainContainer.hasClass('reactify-number-counter--theme-success')).to.be.true;
            });
        })
    })
});