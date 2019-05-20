import React from 'react';
import { Accordion } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Accordion.Header Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion.Header />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion.Header></Accordion.Header>);

    hasDisabledStyle(<Accordion.Header></Accordion.Header>);

    it('should call callback when its clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <Accordion.Header toggleItem={spy}/>
        );
        mountWrapper.simulate('click');
        expect(spy.called).toBeTruthy();
    });

    it('should hide icon when showIcon is false', () => {
        const mountWrapper = mount(<Accordion.Header showIcon={false}/>);
        const icon = mountWrapper.findWhere(n => n.name() === 'FaPlus');
        expect(icon).toBeDefined();
    });

    it('should use custom icon when passed', () => {
        const classname = 'someCustomIcon';
        const icon = <span className={classname}></span>;
        const mountWrapper = mount(<Accordion.Header icon={icon} />);
        const customIcon = mountWrapper.find(`.${classname}`);
        expect(customIcon).toBeDefined();
    });
});
