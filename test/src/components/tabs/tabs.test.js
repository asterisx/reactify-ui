import React from 'react';
import { Tabs, Tab, GroupToggle, Button } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren } from '../../helpers';

expect.extend(matchers);

describe('Tabs Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <Tabs>
        </Tabs>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Tabs />);

    it("tab headers should be disabled when tabsDisabled passed", () => {
        const mountWrapper = mount(
            <Tabs tabsDisabled selectedIndex={1}>
                <Tab index={0}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab1"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={1}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab2"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={2}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab3"></div>
                    </Tab.Body>
                </Tab>
            </Tabs>
        );
        expect(mountWrapper.find(GroupToggle).props().disabled).toBeTruthy();
    });

    describe('Tab Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(
            <Tab index={0}>
                <div/>
            </Tab>
            );
            expect(mountWrapper).toBeDefined();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<Tab>{childElem}</Tab>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });

        it("should have correct tab selected when selectedIndex prop passed", () => {
            const mountWrapper = mount(
                <Tabs selectedIndex={1}>
                    <Tab index={0}>
                        <Tab.Header>
                            <Button/>
                        </Tab.Header>
                        <Tab.Body>
                            <div className="tab1"></div>
                        </Tab.Body>
                    </Tab>
    
                    <Tab index={1}>
                        <Tab.Header>
                            <Button/>
                        </Tab.Header>
                        <Tab.Body>
                            <div className="tab2"></div>
                        </Tab.Body>
                    </Tab>
    
                    <Tab index={2}>
                        <Tab.Header>
                            <Button/>
                        </Tab.Header>
                        <Tab.Body>
                            <div className="tab3"></div>
                        </Tab.Body>
                    </Tab>
                </Tabs>
            );
            expect(mountWrapper.find('.tab1')).toEqual({});
            expect(mountWrapper.find('.tab2')).toBeDefined();
            expect(mountWrapper.find('.tab3')).toEqual({});
        });

        describe('Tab.Header Component', () => {
            it('renders correctly', () => {
                const mountWrapper = mount(
                <Tab.Header>
                </Tab.Header>);
                expect(mountWrapper).toBeDefined();
            });
        
            it("should display children prop passed", () => {
                let someClass = "someClass";
                let childElem = <div className={someClass} />;
                const mountWrapper = mount(<Tab.Header>{childElem}</Tab.Header>);
                const childContent = mountWrapper.find(`.${someClass}`);
                expect(childContent).toBeDefined();
            });
        });

        describe('Tab.Body Component', () => {
            it('renders correctly', () => {
                const mountWrapper = mount(
                <Tab.Body>
                </Tab.Body>);
                expect(mountWrapper).toBeDefined();
            });
        
            it("should display children prop passed", () => {
                let someClass = "someClass";
                let childElem = <div className={someClass} />;
                const mountWrapper = mount(<Tab.Body>{childElem}</Tab.Body>);
                const childContent = mountWrapper.find(`.${someClass}`);
                expect(childContent).toBeDefined();
            });
        });
    });

    it('should make Tab Body visible when children items clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <Tabs onSelectionChange={(selectedIndex) => spy(selectedIndex)}>
                <Tab index={0}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab1"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={1}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab2"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={2}>
                    <Tab.Header>
                        <Button/>
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab3"></div>
                    </Tab.Body>
                </Tab>
            </Tabs>
        );

        const items = mountWrapper.find(Button);
        expect(mountWrapper.find('.tab1')).toBeDefined();
        expect(mountWrapper.find('.tab2')).toEqual({});
        expect(mountWrapper.find('.tab3')).toEqual({});

        const secondItem = items.at(1);
        secondItem.simulate('click');
        expect(mountWrapper.find('.tab1')).toEqual({});
        expect(mountWrapper.find('.tab2')).toBeDefined();
        expect(mountWrapper.find('.tab3')).toEqual({});
    
        const thirdItem = items.at(2);
        thirdItem.simulate('click');
        expect(mountWrapper.find('.tab1')).toEqual({});
        expect(mountWrapper.find('.tab2')).toEqual({});
        expect(mountWrapper.find('.tab3')).toBeDefined();

        const firstItem = items.at(0);
        firstItem.simulate('click');
        expect(mountWrapper.find('.tab1')).toBeDefined();
        expect(mountWrapper.find('.tab2')).toEqual({});
        expect(mountWrapper.find('.tab3')).toEqual({});
    });

    it('should call onSelectionChange with index when children items clicked', () => {
        const spy = sinon.spy();
        const mountWrapper = mount(
            <Tabs onSelectionChange={(selectedIndex) =>spy(selectedIndex)}>
                <Tab index={0}>
                    <Tab.Header>
                        <Button />
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab1"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={1}>
                    <Tab.Header>
                        <Button />
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab2"></div>
                    </Tab.Body>
                </Tab>

                <Tab index={2}>
                    <Tab.Header>
                        <Button />
                    </Tab.Header>
                    <Tab.Body>
                        <div className="tab3"></div>
                    </Tab.Body>
                </Tab>
            </Tabs>
        );

        const items = mountWrapper.find(Button);
        
        const firstItem = items.at(2);
        firstItem.simulate('click');
        expect(spy.firstCall.args[0].index).toBe(2);

        const secondItem = items.at(1);
        secondItem.simulate('click');
        expect(spy.secondCall.args[0].index).toBe(1);
    
        const thirdItem = items.at(0);
        thirdItem.simulate('click');
        expect(spy.thirdCall.args[0].index).toBe(0);
    });
});