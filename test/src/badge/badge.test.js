import React from 'react';
import Badge from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Badge Component', () => {
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

            expect(shallowWrapper.find('.reactify-badge-bubble').filterWhere((item) => {
                return item.prop('style')['backgroundColor'] === color
            })).to.have.lengthOf(1);
        });

        it('should have correct count passed as props', () => {
            let count = "10";
            const shallowWrapper = shallow(<Badge count={count} />);
            const bubble = shallowWrapper.find('.reactify-badge-bubble');
            expect(bubble.text()).to.equal(count);
        });

        it('should have correct size passed as props', () => {
            const shallowWrapper = shallow(<Badge size="small" />);
            const bubble = shallowWrapper.find('.reactify-badge-bubble');
            expect(bubble.hasClass('reactify-badge-bubble--font-size-small'));

            const shallowWrapper1 = shallow(<Badge size="medium" />);
            const bubble1 = shallowWrapper1.find('.reactify-badge-bubble');
            expect(bubble1.hasClass('reactify-badge-bubble--font-size-medium'));

            const shallowWrapper2 = shallow(<Badge size="large" />);
            const bubble2 = shallowWrapper2.find('.reactify-badge-bubble');
            expect(bubble2.hasClass('reactify-badge-bubble--font-size-large'));

            const fontSize = "40px";
            const shallowWrapper3 = shallow(<Badge size={fontSize} />);
            expect(shallowWrapper3.find('.reactify-badge-bubble').filterWhere((item) => {
                return item.prop('style')['fontSize'] === fontSize
            })).to.have.lengthOf(1);
        });

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<Badge disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled'));
        });

        it('should display the position correctly when position prop is passed', () => {
            const shallowWrapper = shallow(<Badge position="top-left"></Badge>);
            const bubble = shallowWrapper.find('.reactify-badge-bubble');
            expect(bubble.hasClass('reactify-badge-bubble--position-top-left'));

            const shallowWrapper1 = shallow(<Badge position="top-right"></Badge>);
            const bubble1 = shallowWrapper1.find('.reactify-badge-bubble');
            expect(bubble1.hasClass('reactify-badge-bubble--position-top-right'));

            const shallowWrapper2 = shallow(<Badge position="bottom-right"></Badge>);
            const bubble2 = shallowWrapper2.find('.reactify-badge-bubble');
            expect(bubble2.hasClass('reactify-badge-bubble--position-bottom-right'));

            const shallowWrapper3 = shallow(<Badge position="bottom-left"></Badge>);
            const bubble3 = shallowWrapper3.find('.reactify-badge-bubble');
            expect(bubble3.hasClass('reactify-badge-bubble--position-bottom-left'));
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<Badge theme="default" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-default'));
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<Badge theme="dark" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-dark'));
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<Badge theme="light" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-light'));
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<Badge theme="info" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-info'));
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<Badge theme="warning" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-warning'));
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<Badge theme="danger" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-danger'));
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<Badge theme="success" />);
                const bubble = shallowWrapper.find('.reactify-badge-bubble');
                expect(bubble.hasClass('reactify-badge-bubble--theme-success'));
            });
        })
    })
});