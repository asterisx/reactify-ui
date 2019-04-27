import React from 'react';
import { Legend } from 'reactify';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('Legend Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<Legend />);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<Legend>{childElem}</Legend>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should display the direction correctly when direction prop is passed', () => {
            const shallowWrapper = shallow(<Legend direction="horizontal"></Legend>);
            expect(shallowWrapper.hasClass('reactify-legend__container--horizontal')).to.be.true;

            const shallowWrapper1 = shallow(<Legend direction="vertical"></Legend>);
            expect(shallowWrapper1.hasClass('reactify-legend__container--vertical')).to.be.true;
        });
    })
});