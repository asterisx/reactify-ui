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
    showPositionTopLeftSnackbar: false,
    showPositionTopRightSnackbar: false,
    showPositionBottomLeftSnackbar: false,
    showPositionBottomRightSnackbar: false,
    showThemeDefaultSnackbar: false,
    showThemeLightSnackbar: false,
    showThemeDarkSnackbar: false,
    showThemeInfoSnackbar: false,
    showThemeWarningSnackbar: false,
    showThemeDangerSnackbar: false,
    showThemeSuccessSnackbar: false,
    showColorSnackbar: false,
    showClassNameSnackbar: false,
    showDelaySnackbar: false,
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
          uniqueIdentifier="dismissUse"
          sourceCode={dismissCode}
        >
          <ul>
            <li>showDismiss="undo"</li>
            <li>
              {' onClose={() => alert("Snackbar is closed")}'}
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
          title="Delay"
          uniqueIdentifier="delayUse"
          sourceCode={delayCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showDelaySnackbar: true })}
          >
            Show SnackBar with 10 sec delay
          </button>
          {this.state.showDelaySnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showDelaySnackbar: false })}
                delay={10000}
                showDismiss
                message="This snackbar will show for ten seconds :)"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Custom Color"
          uniqueIdentifier="colorUse"
          sourceCode={colorCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showColorSnackbar: true })}
          >
            Show SnackBar with custom color
          </button>
          {this.state.showColorSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showColorSnackbar: false })}
                delay={1000}
                color="violet"
                showDismiss
                message="A violet snackbar :O"
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
            Show SnackBar with Children
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

        <DemoCard
          title="Custom Postion (default is top-right)"
          uniqueIdentifier="positionUse"
          sourceCode={positionCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionTopLeftSnackbar: true })}
          >
            Show Top Left
          </button>
          
          {this.state.showPositionTopLeftSnackbar
            && (
              <SnackBar
                position="top-left"
                showDismiss
                onClose={() => this.setState({ showPositionTopLeftSnackbar: false })}
                delay={1000}
                message="SnackBar at top left :)"
              />)
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionBottomLeftSnackbar: true })}
          >
            Show Bottom Left
          </button>

          {this.state.showPositionBottomLeftSnackbar
            && (
              <SnackBar
                position="bottom-left"
                showDismiss
                onClose={() => this.setState({ showPositionBottomLeftSnackbar: false })}
                delay={1000}
                message="SnackBar at bottom left :)"
              />)
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionTopRightSnackbar: true })}
          >
            Show Top Right
          </button>

          {this.state.showPositionTopRightSnackbar
            && (
              <SnackBar
                position="top-right"
                showDismiss
                onClose={() => this.setState({ showPositionTopRightSnackbar: false })}
                delay={1000}
                message="SnackBar at bottom left :)"
              />)
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionBottomRightSnackbar: true })}
          >
            Show Bottom Right
          </button>

          {this.state.showPositionBottomRightSnackbar
            && (
              <SnackBar
                position="bottom-right"
                showDismiss
                onClose={() => this.setState({ showPositionBottomRightSnackbar: false })}
                delay={1000}
                message="SnackBar :)"
              />)
          }
        </DemoCard>


        <DemoCard
          title="Theme"
          uniqueIdentifier="customThemeUse"
          sourceCode={customThemeCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeDefaultSnackbar: true })}
          >
            Show SnackBar with default theme
          </button>
          {this.state.showThemeDefaultSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeDefaultSnackbar: false })}
                delay={1000}
                showDismiss
                theme="default"
                message="This snackbar has default theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeDarkSnackbar: true })}
          >
            Show SnackBar with dark theme
          </button>
          {this.state.showThemeDarkSnackbar
            && (
              <SnackBar
              onClose={() => this.setState({ showThemeDarkSnackbar: false })}
                delay={1000}
                showDismiss
                theme="dark"
                message="This snackbar has dark theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeLightSnackbar: true })}
          >
            Show SnackBar with light theme
          </button>
          {this.state.showThemeLightSnackbar
            && (
              <SnackBar
              onClose={() => this.setState({ showThemeLightSnackbar: false })}
                delay={1000}
                showDismiss
                theme="light"
                message="This snackbar has light theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeInfoSnackbar: true })}
          >
            Show SnackBar with info theme
          </button>
          {this.state.showThemeInfoSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeInfoSnackbar: false })}
                delay={1000}
                showDismiss
                theme="info"
                message="This snackbar has info theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeWarningSnackbar: true })}
          >
            Show SnackBar with warning theme
          </button>
          {this.state.showThemeWarningSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeWarningSnackbar: false })}
                delay={1000}
                showDismiss
                theme="warning"
                message="This snackbar has warning theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeDangerSnackbar: true })}
          >
            Show SnackBar with danger theme
          </button>
          {this.state.showThemeDangerSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeDangerSnackbar: false })}
                delay={1000}
                showDismiss
                theme="danger"
                message="This snackbar has danger theme"
              />
            )}

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showThemeSuccessSnackbar: true })}
          >
            Show SnackBar with success theme
          </button>
          {this.state.showThemeSuccessSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeSuccessSnackbar: false })}
                delay={1000}
                showDismiss
                theme="success"
                message="This snackbar has success theme"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Custom Class"
          uniqueIdentifier="customClassUse"
          sourceCode={customClassCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showClassNameSnackbar: true })}
          >
            Show SnackBar with custom class
          </button>
          {this.state.showClassNameSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showClassNameSnackbar: false })}
                delay={1000}
                showDismiss
                className="p-3 bg-primary"
                message="This snackbar has custom class"
              />
            )}
        </DemoCard>
      </div>
    );
  }
}

export default SnackBarDemo;
