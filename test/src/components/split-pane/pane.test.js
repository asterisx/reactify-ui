import React from 'react';
import { Pane } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('Pane Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Pane />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Pane />);

    describe('props', () => {
        it('should set passed ref to root element', () => {
            const ref = React.createRef();
            mount(<Pane eleRef={ref} />);
            expect(ref.current.tagName).toEqual('DIV');
        });
    });
});