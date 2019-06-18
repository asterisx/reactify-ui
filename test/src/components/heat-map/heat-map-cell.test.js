import React from 'react';
import { HeatMap } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

describe('HeatMap.Cell Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<HeatMap.Cell />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<HeatMap.Cell />);

    hasDisabledStyle(<HeatMap.Cell />)
});