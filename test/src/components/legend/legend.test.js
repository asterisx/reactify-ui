import React from 'react';
import { Legend, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Legend Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Legend />);
        expect(mountWrapper).toBeDefined();
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const mountWrapper = mount(<Legend>{childElem}</Legend>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    })

    describe('props', () => {
        it('should display the direction correctly when direction prop is passed', () => {
            const mountWrapper = mount(<Legend horizontal></Legend>);
            expect(mountWrapper).toHaveStyleRule('flex-direction', 'row');

            const mountWrapper1 = mount(<Legend vertical></Legend>);
            expect(mountWrapper1).toHaveStyleRule('flex-direction', 'column');
        });
    })
});