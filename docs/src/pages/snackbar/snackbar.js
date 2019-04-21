/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { SnackBar } from 'reactify';
import {
  actionCode,
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  disabledCode,
  messageCode,
  positionCode,
  simpleCode,
} from './code-refrence';
import './snackbar.scss';
import DemoCard from '../../components/demo-card';

class SnackBarDemo extends Component {
  state = {
    showActionSnackbar: false,
    showSimpleSnackbar: false,
    showDismissSnackbar: false,
    showImageSnackbar: false,
    showDisabledSnackbar: false,
    showMessageSnackbar: false,
  };

  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showSimpleSnackbar: true })}
          >
            Show SnackBar
          </button>
          {this.state.showSimpleSnackbar
          && (
          <SnackBar
            onClose={() => this.setState({ showSimpleSnackbar: false })}
            delay={1000}
            ß
            message="SnackBar :)"
          />
          )}
        </DemoCard>

        <DemoCard
          title="Message"
          uniqueIdentifier="messageUse"
          sourceCode={messageCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showMessageSnackbar: true })}
          >
            Show SnackBar
          </button>
          {this.state.showMessageSnackbar
          && (
          <SnackBar
            onClose={() => this.setState({ showMessageSnackbar: false })}
            delay={1000}
            message="This is a custom message!!!"
          />
          )}
        </DemoCard>


        <DemoCard
          title="Action, action click"
          uniqueIdentifier="actionUse"
          sourceCode={actionCode}
        >
          <ul>
            <li>action="undo"</li>
            <li>
              {'onActionClick={() => this.setState({ showDisabledSnackbar: false })}'}
            </li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showActionSnackbar: true })}
          >
            Show Example
          </button>
          {this.state.showActionSnackbar
          && (
          <SnackBar
            onClose={() => this.setState({ showActionSnackbar: false })}
            delay={1000}
            action="undo"
            onActionClick={() => this.setState({ showActionSnackbar: false })}
            message="Disabled SnackBar :)"
          />
          )}
        </DemoCard>

        <DemoCard
          title="Disabled Use"
          uniqueIdentifier="disabledUse"
          sourceCode={disabledCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showDisabledSnackbar: true })}
          >
            Show Disabled SnackBar
          </button>
          {this.state.showDisabledSnackbar
          && (
          <SnackBar
            onClose={() => this.setState({ showDisabledSnackbar: false })}
            delay={1000}
            action="undo"
            onActionClick={() => this.setState({ showDisabledSnackbar: false })}
            message="Disabled SnackBar :)"
          />
          )}
        </DemoCard>

        <DemoCard
          title="Show Dismiss and onClose event"
          uniqueIdentifier="actionUse"
          sourceCode={dismissCode}
        >
          <ul>
            <li>showDismiss="undo"</li>
            <li>
              {'onActionClick={() => this.setState({ showDisabledSnackbar: false })}'}
            </li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showDismissSnackbar: true })}
          >
            Show Example
          </button>
          {this.state.showDismissSnackbar
          && (
            <SnackBar
              onClose={() => { this.setState({ showDismissSnackbar: false }); alert('Snackbar is closed'); }}
              delay={5000}
            />
          )}
        </DemoCard>

        <DemoCard
          title="Children"
          uniqueIdentifier="childrenUse"
          sourceCode={childrenCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showImageSnackbar: true })}
          >
            Show SnackBar
          </button>
          {this.state.showImageSnackbar
            && (
            <SnackBar
              onClose={() => this.setState({ showImageSnackbar: false })}
              theme="light"
              delay={5000}
            >
              <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
            </SnackBar>
            )}
        </DemoCard>
      </div>
    );
  }
}

export default SnackBarDemo;
