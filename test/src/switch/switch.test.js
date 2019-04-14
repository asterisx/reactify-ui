import React from 'react';
import Switch from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Switch Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Switch />);
        expect(shallowWrapper).not.be.null;
    })

    it('defaults to unchecked state', () => {
        const shallowWrapper = shallow(<Switch />);
        const switchInput = shallowWrapper.find('.reactify-switch__input');
        expect(switchInput.should.not.be.checked());
    })

    it('should be checked when checked prop is passed', () => {
        const shallowWrapper = shallow(<Switch checked={true}/>);
        const switchInput = shallowWrapper.find('.reactify-switch__input');
        expect(switchInput.should.be.checked());
    })

    it('should change state when clicked', () => {
        const shallowWrapper = shallow(<Switch />);
        const switchInput = shallowWrapper.find('.reactify-switch__input');
        switchInput.simulate('click');
        setTimeout(() => {
            switchInput.should.be.checked()
        }, 0);
    })

    describe('props', () => {
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Switch iconColor={color} checked={true}/>);
            setTimeout(
                () => {
                    const switchInput = shallowWrapper.find('.reactify-switch__input');
                    expect(switchInput).to.have.style('background-color', color)
                }, 0);
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<Switch size="small" />);
            expect(shallowWrapper.hasClass('reactify-switch--font-small')).to.be.true;;

            const shallowWrapper1 = shallow(<Switch size="medium" />);
            expect(shallowWrapper1.hasClass('reactify-switch--font-medium')).to.be.true;;

            const shallowWrapper2 = shallow(<Switch size="large" />);
            expect(shallowWrapper2.hasClass('reactify-switch--font-large')).to.be.true;;

            let fontSize = "40px";
            const shallowWrapper3 = shallow(<Switch size={fontSize} />);
            setTimeout(
                () => {
                    expect(shallowWrapper3).to.have.style('font-size', fontSize)
                }, 0);

        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Switch disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;;
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Switch theme="default" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Switch theme="dark" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-dark')).to.be.true;;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Switch theme="light" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-light')).to.be.true;;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Switch theme="info" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-info')).to.be.true;;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Switch theme="warning" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-warning')).to.be.true;;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Switch theme="danger" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-danger')).to.be.true;;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Switch theme="success" />);
                const input = shallowWrapper.find('.reactify-switch__input');
                expect(input.hasClass('reactify-switch__input--theme-success')).to.be.true;;
            });
        })
    })
});