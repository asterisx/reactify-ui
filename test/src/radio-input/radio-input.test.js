import React from 'react';
import { RadioInput } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Radio Input Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<RadioInput />);
        expect(shallowWrapper).not.be.null;
    })

    it('defaults to unchecked state', () => {
        const shallowWrapper = shallow(<RadioInput />);
        const radioInput = shallowWrapper.find('.reactify-radio-input__input');
        expect(radioInput.should.not.be.checked());
    })

    it('should be checked when checked prop is passed', () => {
        const shallowWrapper = shallow(<RadioInput checked={true}/>);
        const radioInput = shallowWrapper.find('.reactify-radio-input__input');
        expect(radioInput.should.be.checked());
    })

    it('should change state when clicked', () => {
        const mountWrapper = mount(<RadioInput />);
        mountWrapper.simulate('click');
        const radioInput = mountWrapper.find('.reactify-radio-input__input');
        jest.useFakeTimers();
        setTimeout(() => {
            expect(radioInput.props().checked).to.be.true;
        }, 0);
        jest.runAllTimers();
    })
    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<RadioInput>{childElem}</RadioInput>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<RadioInput className={someClass}></RadioInput>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<RadioInput iconColor={color} checked={true}/>);
            jest.useFakeTimers();
            setTimeout(
                () => {
                    const radioInput = shallowWrapper.find('.reactify-radio-input__input');
                    expect(radioInput.props().style['color']).to.equal(color);
            }, 0);
            jest.runAllTimers();
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<RadioInput size="small" />);
            expect(shallowWrapper.hasClass('reactify-radio-input--font-small')).to.be.true;

            const shallowWrapper1 = shallow(<RadioInput size="medium" />);
            expect(shallowWrapper1.hasClass('reactify-radio-input--font-medium')).to.be.true;

            const shallowWrapper2 = shallow(<RadioInput size="large" />);
            expect(shallowWrapper2.hasClass('reactify-radio-input--font-large')).to.be.true;

            let fontSize = "40px";
            const shallowWrapper3 = shallow(<RadioInput size={fontSize} />);
            jest.useFakeTimers();
            setTimeout(
                () => {
                    expect(shallowWrapper3).to.have.style('font-size', fontSize)
            }, 0);
            jest.runAllTimers();

        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<RadioInput disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });

        it('should display the label correctly when label prop is passed', () => {
            let labelText = "This is a label";
            const shallowWrapper = shallow(<RadioInput label={labelText}></RadioInput>);
            const label = shallowWrapper.find(`.reactify-radio-input__label--position-right`);
            expect(label.text()).to.equal(labelText);
        });

        it('should display the labelPosition correctly when label prop is passed', () => {
            let labelText = "This is a label";
            const shallowWrapper = shallow(<RadioInput label={labelText} labelPosition="left"></RadioInput>);
            const label = shallowWrapper.find(`.reactify-radio-input__label--position-left`);
            expect(label.text()).to.equal(labelText);

            const shallowWrapper1 = shallow(<RadioInput label={labelText} labelPosition="right"></RadioInput>);
            const label1 = shallowWrapper1.find(`.reactify-radio-input__label--position-right`);
            expect(label1.text()).to.equal(labelText);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="dark" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="light" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="info" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="warning" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="danger" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="success" />);
                const input = shallowWrapper.find('.reactify-radio-input__input');
                expect(input.hasClass('reactify-radio-input__input--theme-success')).to.be.true;
            });
        })
    })
});