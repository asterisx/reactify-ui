import React from 'react';
import { HeatMap } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

describe('HeatMap.Row Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<HeatMap.Row />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<HeatMap.Row />);

    hasDisabledStyle(<HeatMap.Row />);
});