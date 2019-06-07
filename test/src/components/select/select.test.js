import React from 'react';
import { Select, ListPanel, Checkbox, Constants, SearchBar } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Select Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Select />);
        mountWrapper.simulate('click');
        expect(mountWrapper).toBeDefined();
    });

    hasDisabledStyle(<Select />);

    describe('props', () => {
        it('should call onSelectionChange function when List Panel item is clicked', () => {
            const selectionCallback = sinon.spy();
            const index = 0;
            const mountWrapper = mount(
                <Select onSelectionChange={selectionCallback}>
                    <Select.Item index={index}></Select.Item>
                </Select>
                );
            mountWrapper.simulate('click');
            mountWrapper.find(ListPanel.Item).simulate('click');
            expect(selectionCallback.firstCall.args[0].index).toBe(index);
        });

        it('should allowing searching of items', () => {
            const mountWrapper = mount(
                <Select searchable>
                    <Select.Item index={1}>some</Select.Item>
                    <Select.Item index={2}>value</Select.Item>
                    <Select.Item index={3}>some other value</Select.Item>
                    <Select.Item index={4}>value also</Select.Item>
                </Select>
            );
            mountWrapper.simulate('click');

            const searchInput = 'some';
            const input = mountWrapper.find('input');
            input.simulate('change', { target: { value: searchInput } });
            const listPanelItems = mountWrapper.find(ListPanel.Item);
            expect(listPanelItems.filter(item => typeof items.props().children === 'string').every(item => item.props().children.indexOf(searchInput) >= 0)).toBeTruthy();
        });

        it('should allow selecting all items', () => {
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(
                <Select allSelectable onSelectionChange={selectionCallback}>
                    <Select.Item index={1}></Select.Item>
                </Select>
                );
            mountWrapper.simulate('click');
            mountWrapper.find(Checkbox).simulate('click');
            expect(mountWrapper.state().items.every(item => item.selected)).toBeTruthy();
        });

        it('passing selected prop to list item should put it in controlled mode', () => {
            const mountWrapper = mount(
                <Select>
                    <Select.Item selected index={1}>Item 1</Select.Item>
                    <Select.Item selected index={2}>Item 2</Select.Item>
                    <Select.Item selected index={3}>Item 3</Select.Item>
                </Select>
            );
            mountWrapper.simulate('click');

            const items = mountWrapper.find(ListPanel.Item);

            const firstItem = items.at(0);
            const secondItem = items.at(1);
            const thirdItem = items.at(2);

            firstItem.simulate('click');

            setTimeout(() => {
                expect(firstItem.props().selected).toBeTruthy();
                expect(secondItem.props().selected).toBeTruthy();
                expect(thirdItem.props().selected).toBeTruthy();
            }, 0);

            secondItem.simulate('click');

            setTimeout(() => {
                expect(firstItem.props().selected).toBeTruthy();
                expect(secondItem.props().selected).toBeTruthy();
                expect(thirdItem.props().selected).toBeTruthy();
            }, 0);

            thirdItem.simulate('click');

            setTimeout(() => {
                expect(firstItem.props().selected).toBeTruthy();
                expect(secondItem.props().selected).toBeTruthy();
                expect(thirdItem.props().selected).toBeTruthy();
            }, 0);
        });

        describe('mode', () => {
            it('in singular mode can only select one item', () =>{
                const mountWrapper = mount(
                    <Select singular>
                        <Select.Item index={1}>Item 1</Select.Item>
                        <Select.Item index={2}>Item 2</Select.Item>
                        <Select.Item index={3}>Item 3</Select.Item>
                    </Select>
                );
                mountWrapper.simulate('click');

                const items = mountWrapper.find(ListPanel.Item);

                const firstItem = items.at(0);
                const secondItem = items.at(1);
                const thirdItem = items.at(2);

                firstItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeTruthy();
                    expect(secondItem.props().selected).toBeFalsy();
                    expect(thirdItem.props().selected).toBeFalsy();
                }, 0);

                secondItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeFalsy();
                    expect(secondItem.props().selected).toBeTruthy();
                    expect(thirdItem.props().selected).toBeFalsy();
                }, 0);

                thirdItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeFalsy();
                    expect(secondItem.props().selected).toBeFalsy();
                    expect(thirdItem.props().selected).toBeTruthy();
                }, 0);
            });

            it('in multiple mode can select all item', () =>{
                const mountWrapper = mount(
                    <Select multiple>
                        <Select.Item index={1}>Item 1</Select.Item>
                        <Select.Item index={2}>Item 2</Select.Item>
                        <Select.Item index={3}>Item 3</Select.Item>
                    </Select>
                );
                mountWrapper.simulate('click');

                const items = mountWrapper.find(ListPanel.Item);

                const firstItem = items.at(0);
                const secondItem = items.at(1);
                const thirdItem = items.at(2);

                firstItem.childAt(0).simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeTruthy();
                    expect(secondItem.props().selected).toBeFalsy();
                    expect(thirdItem.props().selected).toBeFalsy();
                }, 0)
              

                secondItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeTruthy();
                    expect(secondItem.props().selected).toBeTruthy();
                    expect(thirdItem.props().selected).toBeFalsy();
                }, 0);

                thirdItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).toBeTruthy();
                    expect(secondItem.props().selected).toBeTruthy();
                    expect(thirdItem.props().selected).toBeTruthy();
                }, 0);
            });
        })

        it('should have correct size passed as props and should drill it to List Panel', () => {
            const mountWrapper = mount(<Select small><Select.Item index={0}/></Select>);
            mountWrapper.simulate('click');
            const listPanel = mountWrapper.find(ListPanel);
            expect(listPanel.props().small).toBeTruthy();
            expect(listPanel.props().medium).toBeTruthy();
            expect(listPanel.props().large).toBeFalsy();

            const mountWrapper1 = mount(<Select medium><Select.Item index={0}/></Select>);
            mountWrapper1.simulate('click');
            const listPanel1 = mountWrapper1.find(ListPanel);
            expect(listPanel1.props().small).toBeFalsy();
            expect(listPanel1.props().medium).toBeTruthy();
            expect(listPanel1.props().large).toBeFalsy();

            const mountWrapper2 = mount(<Select large><Select.Item index={0}/></Select>);
            mountWrapper2.simulate('click');
            const listPanel2 = mountWrapper2.find(ListPanel);
            expect(listPanel2.props().small).toBeFalsy();
            expect(listPanel2.props().medium).toBeTruthy();
            expect(listPanel2.props().large).toBeTruthy();

            const mountWrapper3 = mount(<Select large><Select.Item small index={0}/></Select>);
            mountWrapper3.simulate('click');
            const listPanel3 = mountWrapper3.find(ListPanel);
            expect(listPanel3.props().small).toBeFalsy();
            expect(listPanel3.props().medium).toBeTruthy();
            expect(listPanel3.props().large).toBeTruthy();

            const listPanelItem = mountWrapper3.find(ListPanel.Item);
            expect(listPanelItem.props().small).toBeTruthy();
        });
 
        describe('should have correct theme when theme prop is passed and drill it in to List Panel', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Select {...props}><Select.Item index={0}/></Select>);
                    mountWrapper.simulate('click');
                    const listPanel = mountWrapper.find(ListPanel);
                    expect(listPanel.props()[key]).toBeTruthy();
                });
            });
        });

        describe('should have correct theme when theme prop is passed and drill it in to List Panel Items', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Select><Select.Item index={0} {...props} /></Select>);
                    mountWrapper.simulate('click');
                    const listPanelItem = mountWrapper.find(ListPanel.Item);
                    expect(listPanelItem.props()[key]).toBeTruthy();
                });
            });
        });
    });
});