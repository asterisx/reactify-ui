import React from 'react';
import { Breadcrumbs } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

describe('Breadcrumbs.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Breadcrumbs.Item />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Breadcrumbs.Item />);

    hasDisabledStyle(<Breadcrumbs.Item />);

    it('should call onClickCallback', () => {
        const onClickSpy = sinon.spy();
        const mountWrapper = mount(<Breadcrumbs.Item onClick={onClickSpy} />);
        mountWrapper.simulate('click');

        expect(onClickSpy.called).toBeTruthy();
    })

    describe('props', () => {
        it('have all the props passed', () => {
            const props = {
                content: 'some content',
                onClick: () => {},
                disabled: false,
            }
            const mountWrapper = mount(<Breadcrumbs.Item {...props} />);
            const wrapperProps = mountWrapper.props();
            Object.keys(props).forEach(key => expect(wrapperProps[key]).toBe(props[key]));
        });
    })
});