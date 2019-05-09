import React from 'react';
import {
  Button, Dismiss, ToastProvider, ToastConsumer,
} from '@../../../../reactify/build';
import {
  simpleCode,
} from './code-refrence';
import './toasts.scss';
import DemoCard from '../../components/demo-card';

const ToastDemo = () => (
  <div>
    <DemoCard
      title="Simple Use"
      uniqueIdentifier="simpleUse"
      sourceCode={simpleCode}
    >
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
    </DemoCard>

    <DemoCard
      title="Direction Use"
      uniqueIdentifier="directionUse"
      sourceCode={simpleCode}
    >
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
      sourceCode={simpleCode}
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

export default ToastDemo;
