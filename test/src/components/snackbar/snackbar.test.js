import React from 'react';
import { SnackBar, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
expect.extend(matchers);

describe('SnackBar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SnackBar />);
        expect(mountWrapper).toBeDefined();
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const mountWrapper = mount(<SnackBar>{childElem}</SnackBar>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent.exists()).toBeTruthy();
    })

    describe('props', () => {
        it('should accept className propmount pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<SnackBar className={someClass}></SnackBar>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })

        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<SnackBar style={{backgroundColor: color}} />);
            expect(mountWrapper.props().style.backgroundColor).toBe(color);
        });

        it('should dismiss after delay and also call onClose', () => {
            let delay = 10;
            const onCloseSpy = sinon.spy();
            jest.useFakeTimers();
            mount(<SnackBar delay={delay} onClose={onCloseSpy} />);
            jest.runAllTimers();
            expect(onCloseSpy.called).toBeTruthy();
        });

        it('should call onAction when action prop is passed and pressed', () => {
            const spy = sinon.spy();
            const mountWrapper = mount(<SnackBar action="Some Action" onActionClick={spy} />);
            const action = mountWrapper.find('.reactify-ui-snackbar__action').at(1);
            action.simulate('click');
            expect(spy.called).toBeTruthy();
        });

        it('should have disabled class when disabled prop is pass', () => {
            /* const mountWrapper = mount(<SnackBar disabled={true} />);
            expect(mountWrapper.hasClass('reactify--disabled')); */
        });

        it('should display the message correctly when message prop is passed', () => {
            let messageText = "This is a label";
            const mountWrapper = mount(<SnackBar message={messageText}></SnackBar>);
            expect(mountWrapper.text().search(messageText) >= 0).toBeTruthy();
        });

        it('should display the showDismiss correctly when showDismiss prop is passed', () => {
            let dismissText = "dismiss";
            const mountWrapper = mount(<SnackBar showDismiss></SnackBar>);
            expect(mountWrapper.text().search(dismissText) >= 0).toBeTruthy();
        });

        describe('should have correct position when position is passed', () => {
            it('should have correct size passed as props', () => {
                const mountWrapper = mount(<SnackBar topLeft />);
                expect(mountWrapper).toHaveStyleRule('top', '10px');
                expect(mountWrapper).toHaveStyleRule('left', '10px');

                const mountWrapper1 = mount(<SnackBar topRight />);
                expect(mountWrapper1).toHaveStyleRule('top', '10px');
                expect(mountWrapper1).toHaveStyleRule('right', '10px');

                const mountWrapper2 = mount(<SnackBar bottomLeft />);
                expect(mountWrapper2).toHaveStyleRule('bottom', '10px');
                expect(mountWrapper2).toHaveStyleRule('left', '10px');

                const mountWrapper3 = mount(<SnackBar bottomRight />);
                expect(mountWrapper3).toHaveStyleRule('bottom', '10px');
                expect(mountWrapper3).toHaveStyleRule('right', '10px');
            });
        })

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<SnackBar {...props}></SnackBar>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        })
    })
});