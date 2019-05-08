/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/Button-has-type */
import React, { Component } from 'react';
import { SnackBar, Button } from '@../../../../reactify/build';
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
          <Button
            onClick={() => this.setState({ showSimpleSnackbar: true })}
          >
            Show SnackBar
          </Button>
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
          <Button
            onClick={() => this.setState({ showMessageSnackbar: true })}
          >
            Show SnackBar
          </Button>
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
          <Button
            onClick={() => this.setState({ showActionSnackbar: true })}
          >
            Show Example
          </Button>
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
          <Button
            onClick={() => this.setState({ showDisabledSnackbar: true })}
          >
            Show Disabled SnackBar
          </Button>
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
          <Button
            onClick={() => this.setState({ showDismissSnackbar: true })}
          >
            Show Example
          </Button>
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
          <Button
            onClick={() => this.setState({ showdurationSnackbar: true })}
          >
            Show SnackBar for 10 sec
          </Button>
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
          <Button
            onClick={() => this.setState({ showColorSnackbar: true })}
          >
            Show SnackBar with custom color
          </Button>
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
          <Button
            onClick={() => this.setState({ showImageSnackbar: true })}
          >
            Show SnackBar with Children
          </Button>
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
          <Button
            onClick={() => this.setState({ showPositionTopLeftSnackbar: true })}
          >
            Show Top Left
          </Button>
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

          <Button
            onClick={() => this.setState({ showPositionBottomLeftSnackbar: true })}
          >
            Show Bottom Left
          </Button>
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

          <Button
            onClick={() => this.setState({ showPositionTopRightSnackbar: true })}
          >
            Show Top Right
          </Button>
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

          <Button
            onClick={() => this.setState({ showPositionBottomRightSnackbar: true })}
          >
            Show Bottom Right
          </Button>
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
          <Button
            onClick={() => this.setState({ showThemePrimarySnackbar: true })}
          >
            Show SnackBar with primary theme
          </Button>
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

          <Button
            secondary
            onClick={() => this.setState({ showThemeSecondarySnackbar: true })}
          >
            Show SnackBar with secondary theme
          </Button>
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


          <Button
            dark
            onClick={() => this.setState({ showThemeDarkSnackbar: true })}
          >
            Show SnackBar with dark theme
          </Button>
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

          <Button
            light
            onClick={() => this.setState({ showThemeLightSnackbar: true })}
          >
            Show SnackBar with light theme
          </Button>
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

          <Button
            info
            onClick={() => this.setState({ showThemeInfoSnackbar: true })}
          >
            Show SnackBar with info theme
          </Button>
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

          <Button
            warning
            onClick={() => this.setState({ showThemeWarningSnackbar: true })}
          >
            Show SnackBar with warning theme
          </Button>
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

          <Button
            danger
            onClick={() => this.setState({ showThemeDangerSnackbar: true })}
          >
            Show SnackBar with danger theme
          </Button>
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

          <Button
            success
            onClick={() => this.setState({ showThemeSuccessSnackbar: true })}
          >
            Show SnackBar with success theme
          </Button>
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
          <Button
            onClick={() => this.setState({ showClassNameSnackbar: true })}
          >
            Show SnackBar with custom class
          </Button>
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
