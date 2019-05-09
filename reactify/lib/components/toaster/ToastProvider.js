import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { ToastController } from './ToastController';
import { ToastContainer } from './ToastContainer';

const { Consumer, Provider } = React.createContext();
const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export class ToastProvider extends Component {
  state = { toasts: [] }

  static defaultProps = {
    autoDismissTimeout: 5000,
    transitionDuration: 220,
    autoDismiss: true,
    pauseOnHover: false,
    topLeft: false,
    topCenter: false,
    topRight: true,
    bottomLeft: false,
    bottomCenter: false,
    bottomRight: false,
  };

  static propTypes = {
    autoDismissTimeout: PropTypes.number,
    transitionDuration: PropTypes.number,
    pauseOnHover: PropTypes.bool,
    autoDismiss: PropTypes.bool,
    topLeft: PropTypes.bool,
    topCenter: PropTypes.bool,
    topRight: PropTypes.bool,
    bottomLeft: PropTypes.bool,
    bottomCenter: PropTypes.bool,
    bottomRight: PropTypes.bool,
  }

  addToast = (Comp) => {
    const id = uuidv1();
    this.setState(prevState => ({ toasts: prevState.toasts.concat([{ id, Comp }]) }));
    return id;
  };

  removeToast = (id) => {
    this.setState(prevState => ({ toasts: prevState.toasts.filter(to => to.id !== id) }));
  };

  onDismiss = (id) => {
    this.removeToast(id);
  };

  render() {
    const {
      children, autoDismissTimeout, ...otherProps
    } = this.props;
    const { toasts } = this.state;
    const { addToast, removeToast, onDismiss } = this;
    return (
      <Provider value={{ addToast, removeToast, toasts }}>
        {children}

        {canUseDOM ? (
          createPortal(
            <ToastContainer {...otherProps}>
              {toasts.map(({
                Comp, id,
              }) => (
                <ToastController
                  key={id}
                  autoDismissTimeout={autoDismissTimeout}
                  onDismiss={() => onDismiss(id)}
                  {...otherProps}
                >
                  {Comp}
                </ToastController>
              ))}
            </ToastContainer>,
            document.body,
          )
        ) : (
          <ToastContainer {...otherProps} /> // keep ReactDOM.hydrate happy
        )}
      </Provider>
    );
  }
}

export const ToastConsumer = ({ children }) => (
  <Consumer>{context => children(context)}</Consumer>
);
