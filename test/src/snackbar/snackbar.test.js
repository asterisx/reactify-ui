import React from 'react';
import { SnackBar } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.should();
chai.use(chaiEnzyme())

describe('SnackBar Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<SnackBar />);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<SnackBar>{childElem}</SnackBar>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent.exists()).to.be.true;
    })

    describe('props', () => {
        it('should accept className propshallow pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<SnackBar className={someClass}></SnackBar>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })

        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<SnackBar color={color} />);
            setTimeout(
                () => {
                    expect(shallowWrapper).to.have.style('background-color', color)
                }, 0);
        });

        it('should dismiss after delay and also call onClose', () => {
            let delay = 1000;
            const onCloseSpy = sinon.spy();
            const wrapper = mount(<SnackBar delay={delay} onClose={onCloseSpy} />);
            const spy = sinon.spy(wrapper.instance(), 'dismiss');
            setTimeout(
                () => {
                    expect(spy.toHaveBeenCalled()).to.be.true;
                    expect(onCloseSpy.toHaveBeenCalled()).to.be.true;
                }, delay);
        });

        it('should call onAction when action prop is passed and pressed', () => {
            const spy = sinon.spy();
            const shallowWrapper = shallow(<SnackBar action="Some Action" onAction={spy} />);
            const action = shallowWrapper.find('.reactify-snackbar__action');
            action.simulate('click');
            setTimeout(
                () => {
                expect(spy.toHaveBeenCalled()).to.be.true;
                }, 0);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<SnackBar disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });

        it('should display the message correctly when message prop is passed', () => {
            let messageText = "This is a label";
            const shallowWrapper = shallow(<SnackBar message={messageText}></SnackBar>);
            const label = shallowWrapper.find(`.reactify-snackbar__message`);
            expect(label.text()).to.equal(messageText);
        });

        it('should display the showDismiss correctly when showDismiss prop is passed', () => {
            let dismissText = "Dismiss";
            const shallowWrapper = shallow(<SnackBar showDismiss></SnackBar>);
            const label = shallowWrapper.find(`.reactify-snackbar__dismiss`);
            expect(label.text()).to.equal(dismissText);
        });

        describe('should have correct position when position is passed', () => {
            it('should have correct size passed as props', () => {
                const shallowWrapper = shallow(<SnackBar position="top-left" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--position-top-left')).to.be.true;

                const shallowWrapper1 = shallow(<SnackBar position="top-right" />);
                expect(shallowWrapper1.hasClass('reactify-snackbar--position-top-right')).to.be.true;

                const shallowWrapper2 = shallow(<SnackBar position="bottom-left" />);
                expect(shallowWrapper2.hasClass('reactify-snackbar--position-bottom-left')).to.be.true;

                const shallowWrapper3 = shallow(<SnackBar position="bottom-right" />);
                expect(shallowWrapper3.hasClass('reactify-snackbar--position-bottom-right')).to.be.true;
            });
        })

        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="default" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="dark" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="light" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="info" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="warning" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="danger" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<SnackBar theme="success" />);
                expect(shallowWrapper.hasClass('reactify-snackbar--theme-success')).to.be.true;
            });
        })
    })
});