import React from 'react';
import { Constants, Typeahead, ListPanel, SearchBar } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('Typeahead Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Typeahead />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Typeahead />);

    hasDisabledStyle(<Typeahead />);

    it('should call onChange function when something is searched', () => {
        const onChangeCallback = sinon.spy();
        const props = {index: 0, value: 'value'};
        const mountWrapper = mount(
            <Typeahead onChange={onChangeCallback}>
                <Typeahead.Suggestion {...props}></Typeahead.Suggestion>
            </Typeahead>
            );
        mountWrapper.find('input').simulate('change', { target: { value: props.value }});
        mountWrapper.find(ListPanel.Item).simulate('click');
        expect(onChangeCallback.secondCall.args[0].value).toBe(props.value);
    });

    it('should call onChange function when List Panel item is clicked', () => {
        const onChangeCallback = sinon.spy();
        const props = {index: 0, value: 'value'};
        const mountWrapper = mount(
            <Typeahead onChange={onChangeCallback}>
                <Typeahead.Suggestion {...props}></Typeahead.Suggestion>
            </Typeahead>
            );
        mountWrapper.find('input').simulate('change', { target: { value: props.value }});
        mountWrapper.find(ListPanel.Item).simulate('click');
        expect(onChangeCallback.firstCall.args[0].value).toBe(props.value);
    });

    it('should filter suggestions', () => {
        const values = ['val1', 'val11', 'val2', 'val3'];
        const onChangeCallback = sinon.spy();
        const mountWrapper = mount(
            <Typeahead onChange={onChangeCallback}>
                {values.map((value, index) => <Typeahead.Suggestion key={index} index={index} value={value}>{value}</Typeahead.Suggestion>)}
            </Typeahead>
        );

        const searchValue = 'val';
        const input = mountWrapper.find('input');
        input.simulate('change', { target: { value: searchValue } });
        expect(onChangeCallback.firstCall.args[0].value).toBe(searchValue);

        mountWrapper.setState({showSuggestions: true});
        const listPanelItems = mountWrapper.find(ListPanel.Item);
        expect(listPanelItems
            .filter(item => typeof items.props().children === 'string')
            .every(item => item.props().children.indexOf(searchValue) >= 0)).toBeTruthy();
    });

    describe('props', () => {
        it('passing isControlled prop should put it in controlled mode and suggestions should not filter', () => {
            const values = ['val1', 'val11', 'val2', 'val3'];
            const onChangeCallback = sinon.spy();
            const mountWrapper = mount(
                <Typeahead isControlled onChange={onChangeCallback}>
                    {values.map((value, index) => <Typeahead.Suggestion key={index} index={index} value={value}>{value}</Typeahead.Suggestion>)}
                </Typeahead>
            );

            const searchValue = 'val';
            const input = mountWrapper.find('input');
            input.simulate('change', { target: { value: searchValue } });
            expect(onChangeCallback.firstCall.args[0].value).toBe(searchValue);

            mountWrapper.setState({showSuggestions: true});
            const listPanelItems = mountWrapper.find(ListPanel.Item);
            expect(listPanelItems.length).toBe(values.length);
        });

        it('passing isSelectable false prop should not allow selecting list panel items', () => {
            const values = ['val1', 'val11', 'val2', 'val3'];
            const onChangeCallback = sinon.spy();
            const mountWrapper = mount(
                <Typeahead isSelectable={false} onChange={onChangeCallback}>
                    {values.map((value, index) => <Typeahead.Suggestion key={index} index={index} value={value}>{value}</Typeahead.Suggestion>)}
                </Typeahead>
            );

            const searchValue = 'val';
            const input = mountWrapper.find('input');
            input.simulate('change', { target: { value: searchValue } });
            expect(onChangeCallback.firstCall.args[0].value).toBe(searchValue);

            mountWrapper.setState({showSuggestions: true, searchTerm: searchValue});
            const listPanelItems = mountWrapper.find(ListPanel.Item);
            listPanelItems.at(0).simulate('click');
            expect(onChangeCallback.calledOnce).toBeTruthy();
        });

        it('should have correct size passed as props and should drill it to List Panel', () => {
            const mountWrapper = mount(<Typeahead small><Typeahead.Suggestion index={0} value="value"/></Typeahead>);
            mountWrapper.setState({showSuggestions: true});
            const listPanel = mountWrapper.find(ListPanel);
            expect(listPanel.props().small).toBeTruthy();
            expect(listPanel.props().medium).toBeTruthy();
            expect(listPanel.props().large).toBeFalsy();

            const mountWrapper1 = mount(<Typeahead medium><Typeahead.Suggestion index={0} value="value"/></Typeahead>);
            mountWrapper1.setState({showSuggestions: true});
            const listPanel1 = mountWrapper1.find(ListPanel);
            expect(listPanel1.props().small).toBeFalsy();
            expect(listPanel1.props().medium).toBeTruthy();
            expect(listPanel1.props().large).toBeFalsy();

            const mountWrapper2 = mount(<Typeahead large><Typeahead.Suggestion index={0} value="value"/></Typeahead>);
            mountWrapper2.setState({showSuggestions: true});
            const listPanel2 = mountWrapper2.find(ListPanel);
            expect(listPanel2.props().small).toBeFalsy();
            expect(listPanel2.props().medium).toBeTruthy();
            expect(listPanel2.props().large).toBeTruthy();
        });

        describe('should have correct theme when theme prop is passed and drill it in to List Panel', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Typeahead {...props}><Typeahead.Suggestion index={0} value="value"/></Typeahead>);
                    
                    mountWrapper.setState({showSuggestions: true});
                    const listPanel = mountWrapper.find(ListPanel);
                    expect(listPanel.props()[key]).toBeTruthy();
                });
            });
        });
    });
});