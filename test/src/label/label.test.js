import React from 'react';
import { Label } from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Label Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Label>Simple Label</Label>);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Label>{childElem}</Label>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Label className={someClass}></Label>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Label color={color}/>);

            expect(shallowWrapper.find('.reactify-label__container').filterWhere((item) => {
                return item.prop('style')['backgroundColor'] === color
            })).to.have.lengthOf(1);
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<Label size="small" />);
            const bubble = shallowWrapper.find('.reactify-label__container');
            expect(bubble.hasClass('reactify-label--font-size-small')).to.be.true;

            const shallowWrapper1 = shallow(<Label size="medium" />);
            const bubble1 = shallowWrapper1.find('.reactify-label__container');
            expect(bubble1.hasClass('reactify-label--font-size-medium')).to.be.true;

            const shallowWrapper2 = shallow(<Label size="large" />);
            const bubble2 = shallowWrapper2.find('.reactify-label__container');
            expect(bubble2.hasClass('reactify-label--font-size-large')).to.be.true;

            const fontSize = "40px";
            const shallowWrapper3 = shallow(<Label size={fontSize} />);
            expect(shallowWrapper3.find('.reactify-label__container').filterWhere((item) => {
                return item.prop('style')['fontSize'] === fontSize
            })).to.have.lengthOf(1);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Label disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Label theme="default" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Label theme="dark" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Label theme="light" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Label theme="info" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Label theme="warning" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Label theme="danger" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Label theme="success" />);
                expect(shallowWrapper.hasClass('reactify-label--theme-success')).to.be.true;
            });
        })
    })
});