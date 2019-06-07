import React from 'react';
import { Accordion, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('Accordion.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion.Item index={1}/>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion.Item index={1} />);

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
    describe('should have correct theme when theme prop is passed and drill it in to Accordion items', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(
                        <Accordion.Item index={0} {...props}>
                            <Accordion.Header>
                            </Accordion.Header>
                        </Accordion.Item>
                        );
                const header = mountWrapper.find(Accordion.Header);
                expect(header.props()[key]).toBeTruthy();
            });
        });
    });
});
