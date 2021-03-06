import React, { Component } from 'react';
import {
  Button, Dismiss, Paper, ToastProvider, ToastConsumer,
} from '../../../../reactify-ui/build';
import {
  directionCode,
  hideProgramaticallyCode,
  pauseOnHoverCode,
  simpleCode,
} from './code-refrence';

import {
  directionLink,
  hideProgramaticallyLink,
  pauseOnHoverLink,
  simpleLink,
} from './external-sample-links';

import {
  BottomNav,
  ComponentInfo,
  Constants,
  DemoPage,
  DemoCard,
  withHeader,
} from '../../../common';

const bottomNavLinks = {
  prevLink: {
    text: 'Timer',
    link: `${Constants.componentsPath}/timer`,
  },
  nextLink: {
    text: 'Tooltip',
    link: `${Constants.componentsPath}/tooltip`,
  },
};

class ToastDemo extends Component {
  state = { toastId: undefined };

  render() {
    return (
      <DemoPage componentName="Toast">
        <ComponentInfo
          productionReady
          responsive
          githubLink={`${Constants.githubComponentsPath}/toast`}
        />
        <DemoCard
          title="Simple Use"
          sourceCode={simpleCode}
          externalSampleLink={simpleLink}
        >
          <ToastProvider autoDismissTimeout={10000}>
            <ToastConsumer>
              {({ addToast }) => (
                <Button
                  onClick={
                  () => addToast(
                    <Paper success>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
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
          sourceCode={hideProgramaticallyCode}
          externalSampleLink={hideProgramaticallyLink}
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
          sourceCode={directionCode}
          externalSampleLink={directionLink}
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
          sourceCode={pauseOnHoverCode}
          externalSampleLink={pauseOnHoverLink}
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

        <BottomNav
          className="mt-4 mb-4"
          prevLinkText={bottomNavLinks.prevLink.text}
          prevLink={bottomNavLinks.prevLink.link}
          nextLinkText={bottomNavLinks.nextLink.text}
          nextLink={bottomNavLinks.nextLink.link}
        />
      </DemoPage>
    );
  }
}

export default withHeader(ToastDemo);
