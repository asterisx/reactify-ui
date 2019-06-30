import React from 'react';
import { Resizer, Pane, SplitPane, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('SplitPane Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <SplitPane>
            <Pane></Pane>
            <Pane></Pane>
        </SplitPane>    
        );
        expect(mountWrapper).toBeDefined();
    });

    describe('props', () => {
        it('logs error and returns null when Panes passed as children, count is not 2', () => {
            console.error = jest.fn();
            const mountWrapper = mount(<SplitPane>Some Random Value</SplitPane>);
            expect(console.error).toHaveBeenCalled();
            expect(mountWrapper).toEqual({});

            console.error = jest.fn();
            const mountWrapper1 = mount(
                <SplitPane>
                    <Pane></Pane>
                    <Pane></Pane>
                    <Pane></Pane>
                </SplitPane>
            );
            expect(console.error).toHaveBeenCalled();
            expect(mountWrapper1).toEqual({});

            console.error = jest.fn();
            const mountWrapper2 = mount(
                <SplitPane>
                    <Pane></Pane>
                </SplitPane>
            );
            expect(console.error).toHaveBeenCalled();
            expect(mountWrapper2).toEqual({});
        });

        it('logs error and returns null when Resizer passed as children, count is greater than 1', () => {
            console.error = jest.fn();
            const mountWrapper = mount(
                <SplitPane>
                    <Pane></Pane>
                    <Pane></Pane>
                    <Resizer>{() => {}}</Resizer>
                    <Resizer>{() => {}}</Resizer>
                </SplitPane>
            );
            expect(console.error).toHaveBeenCalled();
            expect(mountWrapper).toEqual({});
        });
        

        it('has vertical styling when vertical prop is passed', () => {
            const mountWrapper = mount(
            <SplitPane vertical>
                <Pane></Pane>
                <Pane></Pane>
            </SplitPane>
            );
            expect(mountWrapper.childAt(0).childAt(0)).toHaveStyleRule('flex-direction', 'column');
        });
    });

    describe('should have correct theme and drills it down to Resizer', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(
                <SplitPane {...props}>
                    <Pane></Pane>
                    <Pane></Pane>
                </SplitPane>
                );
                const resizer = mountWrapper.find(Resizer);
                expect(resizer.props()[key]).toBeTruthy();
            });
        });
    });
});