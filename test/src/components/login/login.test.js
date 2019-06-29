import React from 'react';
import { Login, Spinner, Button } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('Login Component', () => {
    it('renders correctly', function() {
        const mountWrapper = mount(<Login updateState={() => {}}/>);
        expect(mountWrapper).toBeDefined();
    });

    describe('username', () => {
        it('should show value when passed via state prop', () => {
            const value = 'some value';
            const config = {
                fields: {
                  username: {
                    value
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
            const input = mountWrapper.findWhere(n => n.name() === 'input' && n.props().value && n.getDOMNode().value.toString() === value);
            expect(input).toBeDefined();
        });
    
        it('should show error when passed via state prop', () => {
            const errorText = 'some error';
            const config = {
                fields: {
                  username: {
                    isError: false,
                    errorText
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
            expect(mountWrapper.text().indexOf(errorText) === -1).toBeTruthy();

            const config1 = {
                fields: {
                  username: {
                    isError: true,
                    errorText
                  },
                }
            };

            const mountWrapper1 = mount(<Login state={config1} updateState={() => {}}/>);
            expect(mountWrapper1.text().indexOf(errorText) >= 0).toBeTruthy();
        });
        it('should call updateState prop when its value is changed', () => {
            const spy = sinon.spy();
            const defaultValue = 'default value';
            const value = 'some value';
            const config = {
                fields: {
                  username: {
                    value: defaultValue,
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={spy}/>);
            const input = mountWrapper.findWhere(n => n.name() === 'input' && n.props().value && n.getDOMNode().value.toString() === defaultValue);
            input.simulate("change", { target: { value } });
            expect(spy.called).toBeTruthy();
            expect(spy.firstCall.args[0].action === Login.actionTypes.username).toBeTruthy();
            expect(spy.firstCall.args[0].value).toBe(value);
        });
    });

    describe('password', () => {
        it('should show value when passed via state prop', () => {
            const value = 'some value';
            const config = {
                fields: {
                    password: {
                    value
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
            const input = mountWrapper.findWhere(n => n.name() === 'input' && n.props().value && n.getDOMNode().value.toString() === value);
            expect(input).toBeDefined();
        });

        it('should show error when passed via state prop', () => {
            const errorText = 'some error';
            const config = {
                fields: {
                    username: {
                        isError: false,
                    },
                    password: {
                    isError: false,
                    errorText
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
            expect(mountWrapper.text().indexOf(errorText) === -1).toBeTruthy();

            const config1 = {
                username: {
                    isError: false,
                },
                fields: {
                    password: {
                    isError: true,
                    errorText
                  },
                }
            };

            const mountWrapper1 = mount(<Login state={config1} updateState={() => {}}/>);
            expect(mountWrapper1.text().indexOf(errorText) >= 0).toBeTruthy();
        });
        it('should call updateState prop when its value is changed', () => {
            const spy = sinon.spy();
            const defaultValue = 'default value';
            const value = 'some value';
            const config = {
                fields: {
                    username: {
                        value
                    },
                    password: {
                    value: defaultValue,
                  },
                }
            };

            const mountWrapper = mount(<Login state={config} updateState={spy}/>);
            const input = mountWrapper.findWhere(n => n.name() === 'input' && n.props().value && n.getDOMNode().value.toString() === defaultValue);
            input.simulate("change", { target: { value } });
            expect(spy.called).toBeTruthy();
            expect(spy.firstCall.args[0].action === Login.actionTypes.password).toBeTruthy();
            expect(spy.firstCall.args[0].value).toBe(value);
        });

        describe('submit', () => {
            it('should drill disabled prop to Button', () => {
                const disabled = true;
                const config = {
                    fields: {
                        submit: {
                            disabled
                        },
                    }
                };
    
                const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
                const submitButton = mountWrapper.find(Button);
                expect(submitButton.props().disabled).toBe(disabled);
            });
            it('should show loader when loading prop is passed to Button', () => {
                const loading = true;
                const config = {
                    fields: {
                        submit: {
                            isLoading: loading
                        },
                    }
                };
    
                const mountWrapper = mount(<Login state={config} updateState={() => {}}/>);
                const submitButton = mountWrapper.find(Button);
                const spinner = submitButton.find(Spinner);
                expect(spinner).toBeDefined();
            });
            it('should call updateState prop when clicked', () => {
                const spy = sinon.spy();
    
                const mountWrapper = mount(<Login updateState={spy}/>);
                const button = mountWrapper.find(Button);
                button.simulate("click");
                expect(spy.called).toBeTruthy();
                expect(spy.firstCall.args[0].action === Login.actionTypes.submit).toBeTruthy();
            });
        })
    });
});