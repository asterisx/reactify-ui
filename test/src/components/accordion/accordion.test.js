import React from 'react';
import { Accordion, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Accordion Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Accordion />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Accordion />);

    hasDisabledStyle(<Accordion />);

    it('should call callback when its clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <Accordion onChange={spy}>
                <Accordion.Item index={1}>
                    <Accordion.Header>

                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
        );
        const headerWrapper = mountWrapper.find(Accordion.Header);
        headerWrapper.simulate('click');
        expect(spy.called).toBeTruthy();
    });

    it('can only select one item when in singular mode', () => {
        const indexes = [1, 2, 3];
        const mountWrapper = mount(
            <Accordion multiple={false}>
                <Accordion.Item index={indexes[0]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item index={indexes[1]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item index={indexes[2]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
        );

        const headerWrapper = mountWrapper.find(Accordion.Header).at(0);
        headerWrapper.simulate('click');

        expect(mountWrapper.state().items[indexes[0]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[1]]).not.toBeDefined();
        expect(mountWrapper.state().items[indexes[2]]).not.toBeDefined();

        const headerWrapper1 = mountWrapper.find(Accordion.Header).at(1);
        headerWrapper1.simulate('click');

        expect(mountWrapper.state().items[indexes[0]]).not.toBeDefined();
        expect(mountWrapper.state().items[indexes[1]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[2]]).not.toBeDefined();

        const headerWrapper2 = mountWrapper.find(Accordion.Header).at(2);
        headerWrapper2.simulate('click');

        expect(mountWrapper.state().items[indexes[0]]).not.toBeDefined();
        expect(mountWrapper.state().items[indexes[1]]).not.toBeDefined();
        expect(mountWrapper.state().items[indexes[2]].open).toBeTruthy();
    });

    it('can select multiple items when in multiple mode', () => {
        const indexes = [1, 2, 3];
        const mountWrapper = mount(
            <Accordion>
                <Accordion.Item index={indexes[0]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item index={indexes[1]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item index={indexes[2]}>
                    <Accordion.Header>
                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
        );

        const headerWrapper = mountWrapper.find(Accordion.Header).at(0);
        headerWrapper.simulate('click');

        expect(mountWrapper.state().items[indexes[0]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[1]].open).toBeFalsy();
        expect(mountWrapper.state().items[indexes[2]].open).toBeFalsy();

        const headerWrapper1 = mountWrapper.find(Accordion.Header).at(1);
        headerWrapper1.simulate('click');

        expect(mountWrapper.state().items[indexes[0]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[1]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[2]].open).toBeFalsy();

        const headerWrapper2 = mountWrapper.find(Accordion.Header).at(2);
        headerWrapper2.simulate('click');

        expect(mountWrapper.state().items[indexes[0]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[1]].open).toBeTruthy();
        expect(mountWrapper.state().items[indexes[2]].open).toBeTruthy();
    });

    describe('should have correct theme when theme prop is passed and drill it in to Accordion items', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(
                    <Accordion {...props}>
                        <Accordion.Item index={0}>
                            <Accordion.Header>

                            </Accordion.Header>
                        </Accordion.Item>
                    </Accordion>);
                const header = mountWrapper.find(Accordion.Header);
                expect(header.props()[key]).toBeTruthy();
            });
        });
    });
});
