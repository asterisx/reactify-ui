import React from 'react';
import { Snackbar, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('Snackbar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Snackbar />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Snackbar></Snackbar>);

    describe('props', () => {
        it('should accept className prop pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<Snackbar className={someClass}></Snackbar>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })

        it('should have correct color passed as props', () => {
            let color = "red";
            const mountWrapper = mount(<Snackbar style={{backgroundColor: color}} />);
            expect(mountWrapper.props().style.backgroundColor).toBe(color);
        });

        it('should dismiss after delay and also call onClose', () => {
            let delay = 10;
            const onCloseSpy = sinon.spy();
            jest.useFakeTimers();
            mount(<Snackbar delay={delay} onClose={onCloseSpy} />);
            jest.runAllTimers();
            expect(onCloseSpy.called).toBeTruthy();
        });

        it('should call onAction when action prop is passed and pressed', () => {
            const spy = sinon.spy();
            const mountWrapper = mount(<Snackbar action="Some Action" onActionClick={spy} />);
            const action = mountWrapper.find('.reactify-ui-snackbar__action').at(1);
            action.simulate('click');
            expect(spy.called).toBeTruthy();
        });

        hasDisabledStyle(<Snackbar></Snackbar>);

        it('should display the message correctly when message prop is passed', () => {
            let messageText = "This is a label";
            const mountWrapper = mount(<Snackbar message={messageText}></Snackbar>);
            expect(mountWrapper.text().search(messageText) >= 0).toBeTruthy();
        });

        it('should display the showDismiss correctly when showDismiss prop is passed', () => {
            let dismissText = "dismiss";
            const mountWrapper = mount(<Snackbar showDismiss></Snackbar>);
            expect(mountWrapper.text().search(dismissText) >= 0).toBeTruthy();
        });

        describe('should have correct position when position is passed', () => {
            it('topLeft', () => {
                const mountWrapper = mount(<Snackbar topLeft />);
                setTimeout(() => {
                    expect(mountWrapper).toHaveStyleRule('top', '10px');
                    expect(mountWrapper).toHaveStyleRule('left', '10px');
                }, 1000);
            });
            it('topRight', () => {
                const mountWrapper1 = mount(<Snackbar topRight />);
                setTimeout(() => {
                    expect(mountWrapper1).toHaveStyleRule('top', '10px');
                    expect(mountWrapper1).toHaveStyleRule('right', '10px');
                }, 1000);
            });
            it('bottomLeft', () => {
                const mountWrapper2 = mount(<Snackbar bottomLeft />);
                setTimeout(() => {
                    expect(mountWrapper2).toHaveStyleRule('bottom', '10px');
                    expect(mountWrapper2).toHaveStyleRule('left', '10px');
                }, 1000);
            });
            it('bottomRight', () => {
                const mountWrapper3 = mount(<Snackbar bottomRight />);
                setTimeout(() => {
                    expect(mountWrapper3).toHaveStyleRule('bottom', '10px');
                    expect(mountWrapper3).toHaveStyleRule('right', '10px');
                }, 1000);
            });
            it('topCenter', () => {
                const mountWrapper4 = mount(<Snackbar topCenter />);
                setTimeout(() => {
                    expect(mountWrapper4).toHaveStyleRule('top', '10px');
                    expect(mountWrapper4).toHaveStyleRule('left', '50%');
                    expect(mountWrapper4).toHaveStyleRule('transform', 'translateY(0%) translateX(-50%)');
                }, 1000);
            });
            it('bottomCenter', () => {
                const mountWrapper5 = mount(<Snackbar bottomCenter />);
                setTimeout(() => {
                    expect(mountWrapper5).toHaveStyleRule('bottom', '10px');
                    expect(mountWrapper5).toHaveStyleRule('left', '50%');
                    expect(mountWrapper4).toHaveStyleRule('transform', 'translateY(0%) translateX(-50%)');
                }, 1000);
            });
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Snackbar {...props}></Snackbar>);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        })
    })
});