import React from 'react';
import { Accordion } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren } from '../../common';

expect.extend(matchers);

describe('Accordion.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion.Item index={1}/>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion.Item index={1}></Accordion.Item>);

    it('should drill down props to Accordion.Header', () => {
        const spy = sinon.spy();
        const props = { open: true, disabled: true, onHeaderClick: spy };
        const mountWrapper = mount(
            <Accordion.Item {...props} index={1}>
                <Accordion.Header />
            </Accordion.Item>
        );
        const headerWrapper = mountWrapper.find(Accordion.Header);
        expect(headerWrapper.props().open).toBe(props.open);
        expect(headerWrapper.props().disabled).toBe(props.disabled);
        
        headerWrapper.simulate('click');
        expect(spy.called).toBeTruthy();
    });
});
