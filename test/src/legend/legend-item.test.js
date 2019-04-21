import React from 'react';
import { LegendItem } from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('LegendItem Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<LegendItem />);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<LegendItem>{childElem}</LegendItem>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<LegendItem className={someClass}></LegendItem>);
            expect(shallowWrapper.hasClass(someClass));
        })
        it('should have correct color passed as props', () => {
            let color = "red";
            const shallowWrapper = shallow(<LegendItem iconColor={color}/>);
            const icon = shallowWrapper.find('.reactify-legend-item__icon');
            expect(icon.props().style['backgroundColor']).to.equal(color);
        });

        it('should have label when label prop is passed', () => {
            const text = "some text";
            const shallowWrapper = shallow(<LegendItem label={text} />);
            expect(shallowWrapper.text()).to.equal(text);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="default" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="dark" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="light" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="info" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="warning" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="danger" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<LegendItem theme="success" />);
                const icon = shallowWrapper.find('.reactify-legend-item__icon');
                expect(icon.hasClass('reactify-legend-item__icon--theme-success')).to.be.true;
            });
        })
    })
});