/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { SnackBar, Constants } from '@../../../../reactify/build';
import {
  actionCode,
  childrenCode,
  customColorCode,
  customClassCode,
  customThemeCode,
  durationCode,
  disabledCode,
  dismissCode,
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
    showThemePrimarySnackbar: false,
    showThemeSecondarySnackbar: false,
    showThemeDarkSnackbar: false,
    showThemeLightSnackbar: false,
    showThemeInfoSnackbar: false,
    showThemeWarningSnackbar: false,
    showThemeDangerSnackbar: false,
    showThemeSuccessSnackbar: false,
    showColorSnackbar: false,
    showClassNameSnackbar: false,
    showdurationSnackbar: false,
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
            duration={3000}
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
            duration={3000}
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
              {'onActionClick={() => alert("Acion Clicked")}'}
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
            duration={3000}
            action="undo"
            onActionClick={() => { this.setState({ showActionSnackbar: false }); alert('Acion Clicked'); }}
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
            duration={3000}
            disabled
            showDismiss
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
            <li>showDismiss="true"</li>
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
              showDismiss
              message="Click on dismiss to dismiss now!"
              onClose={() => { this.setState({ showDismissSnackbar: false }); alert('Snackbar is closed'); }}
              duration={5000}
            />
          )}
        </DemoCard>

        <DemoCard
          title="Duration"
          uniqueIdentifier="durationUse"
          sourceCode={durationCode}
        >
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showdurationSnackbar: true })}
          >
            Show SnackBar for 10 sec
          </button>
          {this.state.showdurationSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showdurationSnackbar: false })}
                duration={10000}
                showDismiss
                message="This snackbar will show for ten seconds :)"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Custom Color"
          uniqueIdentifier="colorUse"
          sourceCode={customColorCode}
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
                duration={3000}
                style={{ backgroundColor: 'violet' }}
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
              style={{ backgroundColor: 'transparent' }}
              duration={5000}
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
          <br />
          <br />
          {this.state.showPositionTopLeftSnackbar
            && (
              <SnackBar
                topLeft
                showDismiss
                onClose={() => this.setState({ showPositionTopLeftSnackbar: false })}
                duration={3000}
                message="SnackBar at top left :)"
              />
            )
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionBottomLeftSnackbar: true })}
          >
            Show Bottom Left
          </button>
          <br />
          <br />
          {this.state.showPositionBottomLeftSnackbar
            && (
              <SnackBar
                bottomLeft
                showDismiss
                onClose={() => this.setState({ showPositionBottomLeftSnackbar: false })}
                duration={3000}
                message="SnackBar at bottom left :)"
              />
            )
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionTopRightSnackbar: true })}
          >
            Show Top Right
          </button>
          <br />
          <br />
          {this.state.showPositionTopRightSnackbar
            && (
              <SnackBar
                topRight
                showDismiss
                onClose={() => this.setState({ showPositionTopRightSnackbar: false })}
                duration={3000}
                message="SnackBar at top right :)"
              />
            )
          }

          <button
            className="btn btn-primary"
            onClick={() => this.setState({ showPositionBottomRightSnackbar: true })}
          >
            Show Bottom Right
          </button>
          <br />
          <br />
          {this.state.showPositionBottomRightSnackbar
            && (
              <SnackBar
                bottomRight
                showDismiss
                onClose={() => this.setState({ showPositionBottomRightSnackbar: false })}
                duration={3000}
                message="SnackBar at bottom right :)"
              />
            )
          }
        </DemoCard>

        <DemoCard
          title="Theme"
          uniqueIdentifier="customThemeUse"
          sourceCode={customThemeCode}
        >
          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.primary.color,
              color: Constants.defaultThemeColors.primary.fontColor,
            }}
            onClick={() => this.setState({ showThemePrimarySnackbar: true })}
          >
            Show SnackBar with primary theme
          </button>
          <br />
          <br />
          {this.state.showThemePrimarySnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemePrimarySnackbar: false })}
                duration={3000}
                showDismiss
                primary
                message="This snackbar has default theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.secondary.color,
              color: Constants.defaultThemeColors.secondary.fontColor,
            }}
            onClick={() => this.setState({ showThemeSecondarySnackbar: true })}
          >
            Show SnackBar with secondary theme
          </button>
          <br />
          <br />
          {this.state.showThemeSecondarySnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeSecondarySnackbar: false })}
                duration={3000}
                showDismiss
                secondary
                message="This snackbar has default theme"
              />
            )}


          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.dark.color,
              color: Constants.defaultThemeColors.dark.fontColor,
            }}
            onClick={() => this.setState({ showThemeDarkSnackbar: true })}
          >
            Show SnackBar with dark theme
          </button>
          <br />
          <br />
          {this.state.showThemeDarkSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeDarkSnackbar: false })}
                duration={3000}
                showDismiss
                dark
                message="This snackbar has dark theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.light.color,
              color: Constants.defaultThemeColors.light.fontColor,
            }}
            onClick={() => this.setState({ showThemeLightSnackbar: true })}
          >
            Show SnackBar with light theme
          </button>
          <br />
          <br />
          {this.state.showThemeLightSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeLightSnackbar: false })}
                duration={3000}
                showDismiss
                light
                message="This snackbar has light theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.info.color,
              color: Constants.defaultThemeColors.info.fontColor,
            }}
            onClick={() => this.setState({ showThemeInfoSnackbar: true })}
          >
            Show SnackBar with info theme
          </button>
          <br />
          <br />
          {this.state.showThemeInfoSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeInfoSnackbar: false })}
                duration={3000}
                showDismiss
                info
                message="This snackbar has info theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.warning.color,
              color: Constants.defaultThemeColors.warning.fontColor,
            }}
            onClick={() => this.setState({ showThemeWarningSnackbar: true })}
          >
            Show SnackBar with warning theme
          </button>
          <br />
          <br />
          {this.state.showThemeWarningSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeWarningSnackbar: false })}
                duration={3000}
                showDismiss
                warning
                message="This snackbar has warning theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.danger.color,
              color: Constants.defaultThemeColors.danger.fontColor,
            }}
            onClick={() => this.setState({ showThemeDangerSnackbar: true })}
          >
            Show SnackBar with danger theme
          </button>
          <br />
          <br />
          {this.state.showThemeDangerSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeDangerSnackbar: false })}
                duration={3000}
                showDismiss
                danger
                message="This snackbar has danger theme"
              />
            )}

          <button
            className="btn"
            style={{
              backgroundColor: Constants.defaultThemeColors.success.color,
              color: Constants.defaultThemeColors.success.fontColor,
            }}
            onClick={() => this.setState({ showThemeSuccessSnackbar: true })}
          >
            Show SnackBar with success theme
          </button>
          <br />
          <br />
          {this.state.showThemeSuccessSnackbar
            && (
              <SnackBar
                onClose={() => this.setState({ showThemeSuccessSnackbar: false })}
                duration={3000}
                showDismiss
                success
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
                duration={3000}
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
