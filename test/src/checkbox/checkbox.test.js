import React from 'react';
import Checkbox from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Checkbox Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Checkbox />);
        expect(shallowWrapper).not.be.null;
    })

    it('defaults to unchecked state', () => {
        const shallowWrapper = shallow(<Checkbox />);
        expect(shallowWrapper.state().checked).to.be.false;
    })

    it('should be checked when checked prop is passed', () => {
        const shallowWrapper = shallow(<Checkbox checked />);
        expect(shallowWrapper.state().checked).to.be.true;
    })

    it('should change state when clicked', () => {
        const shallowWrapper = shallow(<Checkbox />);
        const checkbox = shallowWrapper.find('.reactify-checkbox__icon');
        checkbox.simulate('click');
        setTimeout(() => {
            expect(shallowWrapper.state().checked).to.be.true;
        }, 0);
    })
    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Checkbox>{childElem}</Checkbox>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Checkbox className={someClass}></Checkbox>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })
        it('should have correct iconColor passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Checkbox color={color} checked/>);
            const checkbox = shallowWrapper.find('.reactify-checkbox__icon');
            expect(checkbox.props().style['color']).to.be.equal(color);

        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<Checkbox size="small" />);
            expect(shallowWrapper.hasClass('reactify-checkbox--font-small')).to.be.true;

            const shallowWrapper1 = shallow(<Checkbox size="medium" />);
            expect(shallowWrapper1.hasClass('reactify-checkbox--font-medium')).to.be.true;

            const shallowWrapper2 = shallow(<Checkbox size="large" />);
            expect(shallowWrapper2.hasClass('reactify-checkbox--font-large')).to.be.true;

            let fontSize = "40px";
            const shallowWrapper3 = shallow(<Checkbox size={fontSize} />);
            setTimeout(
                () => {
                    expect(shallowWrapper3).to.have.style('font-size', fontSize)
                }, 0);

        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Checkbox disabled />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });

        it('should display the label correctly when label prop is passed', () => {
            let labelText = "This is a label";
            const shallowWrapper = shallow(<Checkbox label={labelText}></Checkbox>);
            const label = shallowWrapper.find(`.reactify-checkbox__label--position-right`);
            expect(label.text()).to.equal(labelText);
        });

        it('should display the labelPosition correctly when label prop is passed', () => {
            let labelText = "This is a label";
            const shallowWrapper = shallow(<Checkbox label={labelText} labelPosition="left"></Checkbox>);
            const label = shallowWrapper.find(`.reactify-checkbox__label--position-left`);
            expect(label.text()).to.equal(labelText);

            const shallowWrapper1 = shallow(<Checkbox label={labelText} labelPosition="right"></Checkbox>);
            const label1 = shallowWrapper1.find(`.reactify-checkbox__label--position-right`);
            expect(label1.text()).to.equal(labelText);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="default" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="dark" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="light" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="info" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="warning" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="danger" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Checkbox theme="success" />);
                const input = shallowWrapper.find('.reactify-checkbox__icon');
                expect(input.hasClass('reactify-checkbox__icon--theme-success')).to.be.true;
            });
        })
    })
});