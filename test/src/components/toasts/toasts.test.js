import React from 'react';
import { ToastProvider, ToastConsumer, Button } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { JestEnvironment } from '@jest/environment';
import { rewire } from 'rewire';

expect.extend(matchers);

describe('Toasts Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(
        <ToastProvider>
            <ToastConsumer>
            {({ addToast, removeToast }) => (
                <Button
                onClick={
                    () => addToast(
                    <Dismiss
                        onClose={removeToast}
                    >
                    Lorem Ipsum is not gypsum. Did you know Toast
                    </Dismiss>,
                    )
                    }
                >
                Show Toast
                </Button>
            )}
            </ToastConsumer>
        </ToastProvider>
        );
        expect(mountWrapper).toBeDefined();
    });

    it('removes toast when removeTost prop is called', () => {
        let at, rt;
        const mountWrapper = mount(
            <ToastProvider>
                <ToastConsumer>
                {({ addToast, removeToast }) => { 
                    at = addToast;
                    rt = removeToast;     
                    }
                }
                </ToastConsumer>
            </ToastProvider>
            );
        const spy = sinon.spy(mountWrapper.instance(), 'removeToast');
        jest.useFakeTimers();
        at(<h1>Content</h1>);
        setTimeout(() => rt(), 1000);
        jest.runAllTimers();
        expect(spy.called).toBeTruthy();
    });

    describe('props', () => {
        it('pauseOnHover', () => {
            const Toast = require('@../../../../reactify/build/components/toaster/Toast');
            const spy = sinon.spy();
            const mountWrapper = mount(<Toast.Toast pauseOnHover onMouseEnter={spy}><h1>Some Text</h1></Toast.Toast>);
            mountWrapper.simulate('mouseenter');
            expect(spy.called).toBeTruthy();
        });

        describe('direction', () => {
            it('Top Left', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider topLeft>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('top', '0');
                expect(container).toHaveStyleRule('left', '0');
            });
            it('Top Center', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider topCenter>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('top', '0');
                expect(container).toHaveStyleRule('left', '50%');
                expect(container).toHaveStyleRule('transform', 'translateX(-50%)');
            });
            it('Top Right', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider topRight>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('top', '0');
                expect(container).toHaveStyleRule('right', '0');
            });
            it('Bottom Left', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider bottomLeft>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('bottom', '0');
                expect(container).toHaveStyleRule('left', '0');
            });
            it('Bottom Center', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider bottomCenter>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('bottom', '0');
                expect(container).toHaveStyleRule('left', '50%');
                expect(container).toHaveStyleRule('transform', 'translateX(-50%)');
            });
            it('Bottom Right', () => {
                let at, rt;
                const mountWrapper = mount(
                    <ToastProvider bottomRight>
                        <ToastConsumer>
                        {({ addToast, removeToast }) => { 
                            at = addToast;
                            rt = removeToast;     
                            }
                        }
                        </ToastConsumer>
                    </ToastProvider>
                    );
                const container = mountWrapper.findWhere(n => n.name() === 'ToastContainer');
                expect(container).toHaveStyleRule('bottom', '0');
                expect(container).toHaveStyleRule('right', '0');
            });
        })
    });
})