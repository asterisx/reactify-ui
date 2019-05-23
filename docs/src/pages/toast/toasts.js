import React, { Component } from 'react';
import {
  Button, Dismiss, Paper, ToastProvider, ToastConsumer,
} from '@../../../../reactify/build';
import {
  directionCode,
  hideCode,
  pauseOnHover,
  simpleCode,
} from './code-refrence';
import './toasts.scss';
import DemoCard from '../../components/demo-card';

class ToastDemo extends Component {
  state = { toastId: undefined };

  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <ToastProvider autoDismissTimeout={10000}>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                  () => addToast(
                    <Paper success>
                      Any content can go here, check this sample's code
                    </Paper>,
                  )
                  }
                >
              Show Toast
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
        </DemoCard>

        <DemoCard
          title="Hide Programatically"
          uniqueIdentifier="hideUse"
          sourceCode={hideCode}
        >
          <ToastProvider>
            <ToastConsumer>
              {({ addToast, removeToast }) => {
                let toastId;
                return (
                  <>
                    <Button
                      onClick={
                      () => {
                        toastId = addToast(
                          <Dismiss>
                            Lorem Ipsum is not gypsum. Did you know Toast
                          </Dismiss>,
                        );
                        this.setState({ toastId });
                      }
                      }
                    >
                      Show Toast
                    </Button>
                    <Button
                      className="ml-1"
                      danger
                      onClick={
                      () => removeToast(this.state.toastId)
                      }
                    >
                      Remove Toast
                    </Button>
                  </>
                );
              }
            }
            </ToastConsumer>
          </ToastProvider>
        </DemoCard>

        <DemoCard
          title="Direction Use"
          uniqueIdentifier="directionUse"
          sourceCode={directionCode}
        >
          <ToastProvider topLeft>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Top Left Toast
                  </Dismiss>,
                )
                }
                >
              Show Top Left
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
          <br />
          <br />
          <ToastProvider topCenter>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Top Center Toast
                  </Dismiss>,
                )
                }
                >
              Show Top Center
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
          <br />
          <br />

          <ToastProvider topRight>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Top Right Toast
                  </Dismiss>,
                )
                }
                >
              Show Top Right
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
          <br />
          <br />

          <ToastProvider bottomLeft>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Bottom Left Toast
                  </Dismiss>,
                )
                }
                >
              Show Bottom Left
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
          <br />
          <br />

          <ToastProvider bottomCenter>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Bottom Center Toast
                  </Dismiss>,
                )
                }
                >
              Show Bottom Center
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
          <br />
          <br />

          <ToastProvider bottomRight>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                () => addToast(
                  <Dismiss>
                  Bottom Right Toast
                  </Dismiss>,
                )
                }
                >
              Show Bottom Right
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
        </DemoCard>

        <DemoCard
          title="PauseOnHover"
          uniqueIdentifier="pauseOnHoverUse"
          sourceCode={pauseOnHover}
        >
          <ToastProvider pauseOnHover>
            <ToastConsumer>
              {({ addToast, removeToast }) => (
                <Button
                  onClick={
                  () => addToast(
                    <Dismiss
                      onClose={removeToast}
                    >
                    Hover over this toast and it will pause
                    </Dismiss>,
                  )
                  }
                >
              Show Toast
                </Button>
              )}
            </ToastConsumer>
          </ToastProvider>
        </DemoCard>
      </div>
    );
  }
}

export default ToastDemo;
