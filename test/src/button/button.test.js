import React from 'react';
import { Button } from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Button Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Button>Simple Button</Button>);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Button>{childElem}</Button>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<Button className={someClass}></Button>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })
        
        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<Button color={color}/>);

            expect(shallowWrapper.find('.reactify-button__container').filterWhere((item) => {
                return item.prop('style')['backgroundColor'] === color
            })).to.have.lengthOf(1);
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<Button size="small" />);
            const bubble = shallowWrapper.find('.reactify-button__container');
            expect(bubble.hasClass('reactify-button--font-size-small')).to.be.true;

            const shallowWrapper1 = shallow(<Button size="medium" />);
            const bubble1 = shallowWrapper1.find('.reactify-button__container');
            expect(bubble1.hasClass('reactify-button--font-size-medium')).to.be.true;

            const shallowWrapper2 = shallow(<Button size="large" />);
            const bubble2 = shallowWrapper2.find('.reactify-button__container');
            expect(bubble2.hasClass('reactify-button--font-size-large')).to.be.true;

            const fontSize = "40px";
            const shallowWrapper3 = shallow(<Button size={fontSize} />);
            expect(shallowWrapper3.find('.reactify-button__container').filterWhere((item) => {
                return item.prop('style')['fontSize'] === fontSize
            })).to.have.lengthOf(1);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Button disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Button theme="default" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Button theme="dark" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Button theme="light" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Button theme="info" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Button theme="warning" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Button theme="danger" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Button theme="success" />);
                expect(shallowWrapper.hasClass('reactify-button--theme-success')).to.be.true;
            });
        })

        describe('should have correct clear theme when clear and theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Button theme="default" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Button theme="dark" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Button theme="light" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Button theme="info" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Button theme="warning" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Button theme="danger" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Button theme="success" clear/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-success')).to.be.true;
            });
        })

        describe('should have correct clear theme when clear, bordered and theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Button theme="default" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-default-bordered')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Button theme="dark" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-dark-bordered')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Button theme="light" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-light-bordered')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Button theme="info" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-info-bordered')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Button theme="warning" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-warning-bordered')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Button theme="danger" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-danger-bordered')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Button theme="success" clear bordered/>);
                expect(shallowWrapper.hasClass('reactify-button--border-clear-success-bordered')).to.be.true;
            });
        })

        it('should show loader when loading passed as props', () => {
            const shallowWrapper = shallow(<Button loading={true} />);
            expect(shallowWrapper.find('.reactify-button__loader__container')).to.have.lengthOf(1);
        });

        it('should show loader position correct when loaderPosition passed as props', () => {
            const shallowWrapper = shallow(<Button loading={true} loaderPosition="left" text="Button"/>);
            expect(shallowWrapper.childAt(0).hasClass('reactify-button__loader__container')).to.be.true;
        });

        it('should show loader position correct when loaderPosition passed as props', () => {
            const shallowWrapper = shallow(<Button loading={true} loaderPosition="right" text="Button" />);
            expect(shallowWrapper.childAt(1).hasClass('reactify-button__loader__container')).to.be.true;
        });

    })
});