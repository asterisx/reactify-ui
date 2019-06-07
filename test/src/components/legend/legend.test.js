import React from 'react';
import { Legend } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('Legend Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Legend />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Legend></Legend>);

    describe('props', () => {
        it('should display the direction correctly when direction prop is passed', () => {
            const mountWrapper = mount(<Legend horizontal></Legend>);
            expect(mountWrapper).toHaveStyleRule('flex-direction', 'row');

            const mountWrapper1 = mount(<Legend vertical></Legend>);
            expect(mountWrapper1).toHaveStyleRule('flex-direction', 'column');
        });
    })
});