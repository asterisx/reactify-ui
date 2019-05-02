import React from 'react';
import { ListPanel, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';

expect.extend(matchers);

describe('ListPanel Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<ListPanel />);
        expect(mountWrapper).toBeDefined();
    })

    it("should display children prop passed", () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} />;
        const mountWrapper = mount(<ListPanel>{childElem}</ListPanel>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    });

    describe('props', () => {
        it('should call onSelectionChange function when List Panel item is clicked', () => {
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(<ListPanel onSelectionChange={selectionCallback}><ListPanel.Item index={1}></ListPanel.Item></ListPanel>);
            mountWrapper.find(ListPanel.Item).simulate('click');
            expect(selectionCallback.called).toBeTruthy();
        });

        describe('mode', () => {
            it('in singular mode can only select one item', () =>{
                const mountWrapper = mount(
                    <ListPanel>
                        <ListPanel.Item index={1}>Item 1</ListPanel.Item>
                        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
                        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
                    </ListPanel>
                );

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
                    <ListPanel multiple>
                        <ListPanel.Item index={1}>Item 1</ListPanel.Item>
                        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
                        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
                    </ListPanel>
                );

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

        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<ListPanel disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should have correct size passed as props and should drill it to List Items', () => {
            const mountWrapper = mount(<ListPanel><ListPanel.Item small index={0}/></ListPanel>);
            const item = mountWrapper.find(ListPanel.Item);
            expect(item).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<ListPanel><ListPanel.Item medium index={0}/></ListPanel>);
            const item1 = mountWrapper1.find(ListPanel.Item);
            expect(item1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<ListPanel><ListPanel.Item large index={0}/></ListPanel>);
            const item2 = mountWrapper2.find(ListPanel.Item);
            expect(item2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);
        });
 
        describe('should have correct theme when theme prop is passed and drill it in to List items', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<ListPanel {...props}><ListPanel.Item index={0}/></ListPanel>);
                    const item = mountWrapper.childAt(0);
                    expect(item).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });

    describe('ListPanel.Item Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<ListPanel.Item index={1}/>);
            expect(mountWrapper).toBeDefined();
        });

        it('renders correctly', () => {
            const onClickCallback = sinon.spy();
            const mountWrapper = mount(<ListPanel.Item onClick={onClickCallback}  index={1}/>);
            mountWrapper.simulate('click');
            expect(onClickCallback.called).toBeTruthy();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<ListPanel.Item index={1}>{childElem}</ListPanel.Item>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });
    
        it('should have border when border prop is passed', () => {
            const mountWrapper = mount(<ListPanel.Item bordered index={1}/>);
            expect(mountWrapper).toHaveStyleRule('border-top', '1px solid darkgray');

            const mountWrapper1 = mount(<ListPanel.Item bordered={false}  index={1}/>);
            expect(mountWrapper1).not.toHaveStyleRule('border-top', '1px solid darkgray');
        });

        it('should have selected when selected prop is passed', () => {
            const mountWrapper = mount(<ListPanel.Item selected index={1}/>);
            expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors.primary.color));

            const mountWrapper1 = mount(<ListPanel.Item selected={false} index={1}/>);
            expect(mountWrapper1).not.toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors.primary.color));
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<ListPanel.Item style={{backgroundColor: color}} index={1}/>);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });

        it('should have correct size passed as props and should drill it to List Items', () => {
            const mountWrapper = mount(<ListPanel.Item small index={0}/>);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<ListPanel.Item medium index={0}/>);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<ListPanel.Item large index={0}/>);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<ListPanel.Item style={{fontSize: fontSize}} index={0}/>);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<ListPanel.Item {...props} index={0}></ListPanel.Item>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
                });
            });
        });
    });
});