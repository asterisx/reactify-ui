import React from 'react';
import RadioInput from 'reactify';
import { shallow } from 'enzyme';
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
        const switchInput = shallowWrapper.find('.reactify-radio-input__input');
        expect(switchInput.should.not.be.checked());
    })

    it('should be checked when checked prop is passed', () => {
        const shallowWrapper = shallow(<RadioInput checked={true}/>);
        const switchInput = shallowWrapper.find('.reactify-radio-input__input');
        expect(switchInput.should.be.checked());
    })

    it('should change state when clicked', () => {
        const shallowWrapper = shallow(<RadioInput />);
        const switchInput = shallowWrapper.find('.reactify-radio-input__input');
        switchInput.simulate('click');
        setTimeout(() => {
            switchInput.should.be.checked()
        }, 0);
    })

    describe('props', () => {
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<RadioInput iconColor={color} checked={true}/>);
            setTimeout(
                () => {
                    const switchInput = shallowWrapper.find('.reactify-radio-input__input');
                    expect(switchInput).to.have.style('background-color', color)
                }, 0);
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<RadioInput size="small" />);
            expect(shallowWrapper.hasClass('reactify-radio-input--font-small'));

            const shallowWrapper1 = shallow(<RadioInput size="medium" />);
            expect(shallowWrapper1.hasClass('reactify-radio-input--font-medium'));

            const shallowWrapper2 = shallow(<RadioInput size="large" />);
            expect(shallowWrapper2.hasClass('reactify-radio-input--font-large'));

            let fontSize = "40px";
            const shallowWrapper3 = shallow(<RadioInput size={fontSize} />);
            setTimeout(
                () => {
                    expect(shallowWrapper3).to.have.style('font-size', fontSize)
                }, 0);

        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<RadioInput disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-default'));
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-dark'));
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-light'));
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-info'));
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-warning'));
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-danger'));
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<RadioInput theme="default" />);
                expect(shallowWrapper.hasClass('reactify-radio-input--theme-success'));
            });
        })
    })
});