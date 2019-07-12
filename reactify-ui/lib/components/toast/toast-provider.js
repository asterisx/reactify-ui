import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { ToastController } from './toast-controller';
import { ToastContainer } from './toast-container';
import { canUseDOM } from '../../common';

const { Consumer, Provider } = React.createContext();
export class ToastProvider extends Component {
  state = { toasts: [] }

  static propTypes = {
    /**
     * If 'true', the Toast is autodismissable and will dismiss
     * after the timeout runs out,
     * Defaults to 'true'
     */
    autoDismiss: PropTypes.bool,
    /**
     * The autodimss timeout
     */
    autoDismissTimeout: PropTypes.number,
    /**
     * The transition duration for the Toast transitions
     */
    transitionDuration: PropTypes.number,
    /**
     * If 'true', the countdown is paused on hover
     * Defaults to 'false'
     */
    pauseOnHover: PropTypes.bool,
    /**
     * If 'true', the Toast will be positioned top left
     * Defaults to 'true'
     */
    topLeft: PropTypes.bool,
    /**
     * If 'true', the Toast will be positioned top right
     * Defaults to 'false'
     */
    topRight: PropTypes.bool,
    /**
     * If 'true', the tooltip will be positioned bottom left
     * Defaults to 'false'
     */
    bottomLeft: PropTypes.bool,
    /**
     * If 'true', the Toast will be positioned bottom right
     * Defaults to 'false'
     */
    bottomRight: PropTypes.bool,
    /**
     * If 'true', the Toast will be positioned bottom center
     * Defaults to 'false'
     */
    bottomCenter: PropTypes.bool,
    /**
     * If 'true', the Toast will be positioned top center
     * Defaults to 'false'
     */
    topCenter: PropTypes.bool,
  }

  static defaultProps = {
    autoDismiss: true,
    autoDismissTimeout: 5000,
    transitionDuration: 220,
    pauseOnHover: false,
    topLeft: false,
    topCenter: false,
    topRight: true,
    bottomLeft: false,
    bottomCenter: false,
    bottomRight: false,
  };


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
