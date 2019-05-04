import React from 'react';
import { Modal, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('Modal Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Modal />);
        expect(mountWrapper).toBeDefined();
    })

    it('should call back function when closed on outside', () => {
        const spy = sinon.spy();
        const bg = mount(<Modal small onClose={spy}/>).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-modal__bg'));
        setTimeout(() => {
            expect(spy.called).toBeTruthy();
        }, 0);
    })

    it('should have correct size passed as props', () => {
        const child = mount(<Modal small />).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-modal__children'));
        expect(child).toHaveStyleRule('width', '30em');

        const child1 = mount(<Modal medium />).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-modal__children'));
        expect(child1).toHaveStyleRule('width', '50em');

        const child2 = mount(<Modal large />).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-modal__children'));
        expect(child2).toHaveStyleRule('width', '70em');

        const width = "40px";
        const child3 = mount(<Modal style={{width: width}} />).findWhere(n => n.name() === 'div' && n.hasClass('reactify-ui-modal__children'));
        expect(child3).toHaveStyleRule('width', width);
    });
});