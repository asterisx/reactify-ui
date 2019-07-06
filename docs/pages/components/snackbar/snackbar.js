/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/Button-has-type */
import React, { Component } from 'react';
import { Snackbar, Button } from '@../../../../reactify-ui/build';
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
import { DemoCard, withHeader } from '../../../common';

class SnackbarDemo extends Component {
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
    showPositionBottomCenterSnackbar: false,
    showPositionTopCenterSnackbar: false,
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
      <div className="w-100">
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          <Button
            onClick={() => this.setState({ showSimpleSnackbar: true })}
          >
            Show Snackbar
          </Button>
          {this.state.showSimpleSnackbar
          && (
          <Snackbar
            onClose={() => this.setState({ showSimpleSnackbar: false })}
            duration={3000}
            message="Snackbar :)"
          />
          )}
        </DemoCard>

        <DemoCard
          title="Message"
          uniqueIdentifier="messageUse"
          sourceCode={messageCode}
        >
          <Button
            onClick={() => this.setState({ showMessageSnackbar: true })}
          >
            Show Snackbar
          </Button>
          {this.state.showMessageSnackbar
          && (
          <Snackbar
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
          <Button
            onClick={() => this.setState({ showActionSnackbar: true })}
          >
            Show Example
          </Button>
          {this.state.showActionSnackbar
          && (
          <Snackbar
            onClose={() => this.setState({ showActionSnackbar: false })}
            duration={3000}
            action="undo"
            onActionClick={() => { this.setState({ showActionSnackbar: false }); alert('Acion Clicked'); }}
            message="Disabled Snackbar :)"
          />
          )}
        </DemoCard>

        <DemoCard
          title="Disabled Use"
          uniqueIdentifier="disabledUse"
          sourceCode={disabledCode}
        >
          <Button
            onClick={() => this.setState({ showDisabledSnackbar: true })}
          >
            Show Disabled Snackbar
          </Button>
          {this.state.showDisabledSnackbar
          && (
          <Snackbar
            onClose={() => this.setState({ showDisabledSnackbar: false })}
            duration={3000}
            disabled
            showDismiss
            message="Disabled Snackbar :)"
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
          <Button
            onClick={() => this.setState({ showDismissSnackbar: true })}
          >
            Show Example
          </Button>
          {this.state.showDismissSnackbar
          && (
            <Snackbar
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
          <Button
            onClick={() => this.setState({ showdurationSnackbar: true })}
          >
            Show Snackbar for 10 sec
          </Button>
          {this.state.showdurationSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showdurationSnackbar: false })}
                duration={10000}
                showDismiss
                message="This Snackbar will show for ten seconds :)"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Custom Color"
          uniqueIdentifier="colorUse"
          sourceCode={customColorCode}
        >
          <Button
            onClick={() => this.setState({ showColorSnackbar: true })}
          >
            Show Snackbar with custom color
          </Button>
          {this.state.showColorSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showColorSnackbar: false })}
                duration={3000}
                style={{ backgroundColor: 'violet' }}
                showDismiss
                message="A violet Snackbar :O"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Children"
          uniqueIdentifier="childrenUse"
          sourceCode={childrenCode}
        >
          <Button
            onClick={() => this.setState({ showImageSnackbar: true })}
          >
            Show Snackbar with Children
          </Button>
          {this.state.showImageSnackbar
            && (
            <Snackbar
              onClose={() => this.setState({ showImageSnackbar: false })}
              style={{ backgroundColor: 'transparent' }}
              duration={5000}
            >
              <img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" />
            </Snackbar>
            )}
        </DemoCard>

        <DemoCard
          title="Custom Postion (default is top-right)"
          uniqueIdentifier="positionUse"
          sourceCode={positionCode}
        >
          <Button
            onClick={() => this.setState({ showPositionTopLeftSnackbar: true })}
          >
            Show Top Left
          </Button>
          <br />
          <br />
          {this.state.showPositionTopLeftSnackbar
            && (
              <Snackbar
                topLeft
                showDismiss
                onClose={() => this.setState({ showPositionTopLeftSnackbar: false })}
                duration={3000}
                message="Snackbar at top left :)"
              />
            )
          }

          <Button
            onClick={() => this.setState({ showPositionBottomLeftSnackbar: true })}
          >
            Show Bottom Left
          </Button>
          <br />
          <br />
          {this.state.showPositionBottomLeftSnackbar
            && (
              <Snackbar
                bottomLeft
                showDismiss
                onClose={() => this.setState({ showPositionBottomLeftSnackbar: false })}
                duration={3000}
                message="Snackbar at bottom left :)"
              />
            )
          }

          <Button
            onClick={() => this.setState({ showPositionTopRightSnackbar: true })}
          >
            Show Top Right
          </Button>
          <br />
          <br />
          {this.state.showPositionTopRightSnackbar
            && (
              <Snackbar
                topRight
                showDismiss
                onClose={() => this.setState({ showPositionTopRightSnackbar: false })}
                duration={3000}
                message="Snackbar at top right :)"
              />
            )
          }

          <Button
            onClick={() => this.setState({ showPositionBottomRightSnackbar: true })}
          >
            Show Bottom Right
          </Button>
          <br />
          <br />
          {this.state.showPositionBottomRightSnackbar
            && (
              <Snackbar
                bottomRight
                showDismiss
                onClose={() => this.setState({ showPositionBottomRightSnackbar: false })}
                duration={3000}
                message="Snackbar at bottom right :)"
              />
            )
          }

          <Button
            onClick={() => this.setState({ showPositionTopCenterSnackbar: true })}
          >
            Show Top Center
          </Button>
          <br />
          <br />
          {this.state.showPositionTopCenterSnackbar
            && (
              <Snackbar
                topCenter
                showDismiss
                onClose={() => this.setState({ showPositionTopCenterSnackbar: false })}
                duration={3000}
                message="Snackbar at top right :)"
              />
            )
          }

          <Button
            onClick={() => this.setState({ showPositionBottomCenterSnackbar: true })}
          >
            Show Bottom Center
          </Button>
          <br />
          <br />
          {this.state.showPositionBottomCenterSnackbar
            && (
              <Snackbar
                bottomCenter
                showDismiss
                onClose={() => this.setState({ showPositionBottomCenterSnackbar: false })}
                duration={3000}
                message="Snackbar at bottom right :)"
              />
            )
          }
        </DemoCard>

        <DemoCard
          title="Theme"
          uniqueIdentifier="customThemeUse"
          sourceCode={customThemeCode}
        >
          <Button
            onClick={() => this.setState({ showThemePrimarySnackbar: true })}
          >
            Show Snackbar with primary theme
          </Button>
          <br />
          <br />
          {this.state.showThemePrimarySnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemePrimarySnackbar: false })}
                duration={3000}
                showDismiss
                primary
                message="This Snackbar has default theme"
              />
            )}

          <Button
            secondary
            onClick={() => this.setState({ showThemeSecondarySnackbar: true })}
          >
            Show Snackbar with secondary theme
          </Button>
          <br />
          <br />
          {this.state.showThemeSecondarySnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeSecondarySnackbar: false })}
                duration={3000}
                showDismiss
                secondary
                message="This Snackbar has default theme"
              />
            )}


          <Button
            dark
            onClick={() => this.setState({ showThemeDarkSnackbar: true })}
          >
            Show Snackbar with dark theme
          </Button>
          <br />
          <br />
          {this.state.showThemeDarkSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeDarkSnackbar: false })}
                duration={3000}
                showDismiss
                dark
                message="This Snackbar has dark theme"
              />
            )}

          <Button
            light
            onClick={() => this.setState({ showThemeLightSnackbar: true })}
          >
            Show Snackbar with light theme
          </Button>
          <br />
          <br />
          {this.state.showThemeLightSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeLightSnackbar: false })}
                duration={3000}
                showDismiss
                light
                message="This Snackbar has light theme"
              />
            )}

          <Button
            info
            onClick={() => this.setState({ showThemeInfoSnackbar: true })}
          >
            Show Snackbar with info theme
          </Button>
          <br />
          <br />
          {this.state.showThemeInfoSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeInfoSnackbar: false })}
                duration={3000}
                showDismiss
                info
                message="This Snackbar has info theme"
              />
            )}

          <Button
            warning
            onClick={() => this.setState({ showThemeWarningSnackbar: true })}
          >
            Show Snackbar with warning theme
          </Button>
          <br />
          <br />
          {this.state.showThemeWarningSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeWarningSnackbar: false })}
                duration={3000}
                showDismiss
                warning
                message="This Snackbar has warning theme"
              />
            )}

          <Button
            danger
            onClick={() => this.setState({ showThemeDangerSnackbar: true })}
          >
            Show Snackbar with danger theme
          </Button>
          <br />
          <br />
          {this.state.showThemeDangerSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeDangerSnackbar: false })}
                duration={3000}
                showDismiss
                danger
                message="This Snackbar has danger theme"
              />
            )}

          <Button
            success
            onClick={() => this.setState({ showThemeSuccessSnackbar: true })}
          >
            Show Snackbar with success theme
          </Button>
          <br />
          <br />
          {this.state.showThemeSuccessSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showThemeSuccessSnackbar: false })}
                duration={3000}
                showDismiss
                success
                message="This Snackbar has success theme"
              />
            )}
        </DemoCard>

        <DemoCard
          title="Custom Class"
          uniqueIdentifier="customClassUse"
          sourceCode={customClassCode}
        >
          <Button
            onClick={() => this.setState({ showClassNameSnackbar: true })}
          >
            Show Snackbar with custom class
          </Button>
          {this.state.showClassNameSnackbar
            && (
              <Snackbar
                onClose={() => this.setState({ showClassNameSnackbar: false })}
                duration={3000}
                showDismiss
                className="p-3 bg-primary"
                message="This Snackbar has custom class"
              />
            )}
        </DemoCard>
      </div>
    );
  }
}

export default withHeader(SnackbarDemo);
