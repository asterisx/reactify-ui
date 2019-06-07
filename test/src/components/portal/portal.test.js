import React from 'react';
import { Portal } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('Portal Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Portal />);
        expect(mountWrapper).toBeDefined();
    })

    it('should call back function when closed on outside', () => {
        const spy = sinon.spy();
        const bg = mount(<Portal onClose={spy}/>).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-portal__bg'));
        setTimeout(() => {
            expect(spy.called).toBeTruthy();
        }, 0);
    })

});