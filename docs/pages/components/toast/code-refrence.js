const directionCode = `
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
`;

const hideProgramaticallyCode = `
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
`;

const pauseOnHoverCode = `
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
`;


const simpleCode = `
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
`;

export {
  directionCode,
  hideProgramaticallyCode,
  pauseOnHoverCode,
  simpleCode,
};
