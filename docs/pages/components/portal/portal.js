/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Portal, Button } from '@../../../../reactify-ui/build';
import {
  autoCloseCode,
  hideBackdropCode,
  onCloseCode,
  portalLocationCode,
  simpleCode,
} from './code-refrence';

import {
  autoCloseLink,
  hideBackdropLink,
  onCloseLink,
  portalLocationLink,
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
    text: 'Paper',
    link: `${Constants.componentsPath}/paper`,
  },
  nextLink: {
    text: 'Progress Bar',
    link: `${Constants.componentsPath}/progress-bar`,
  },
};

class PortalDemo extends Component {
    state = {
      simplePortalOpen: false,
      leftPortalOpen: false,
      rightPortalOpen: false,
      topPortalOpen: false,
      bottomPortalOpen: false,
      autoClosePortalOpen: false,
      hideBackdropPortalOpen: false,
      onClosePortal: false,
    };

    render() {
      return (
        <DemoPage componentName="Portal">
          <ComponentInfo
            productionReady
            responsive
            githubLink={`${Constants.githubComponentsPath}/portal`}
          />
          <DemoCard
            title="Simple Use"
            sourceCode={simpleCode}
            externalSampleLink={simpleLink}
          >
            <Button onClick={() => this.setState({ simplePortalOpen: true })}>Open Portal</Button>
            {this.state.simplePortalOpen && (
            <Portal top onClose={() => this.setState({ simplePortalOpen: false })}>
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
          </DemoCard>

          <DemoCard
            title="Portal Location"
            sourceCode={portalLocationCode}
            externalSampleLink={portalLocationLink}
          >
            <Button onClick={() => this.setState({ topPortalOpen: true })}>Open Top Portal</Button>
            {this.state.topPortalOpen && (
            <Portal top onClose={() => this.setState({ topPortalOpen: false })}>
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ leftPortalOpen: true })}
            >
                Open Left Portal
            </Button>
            {this.state.leftPortalOpen && (
            <Portal left onClose={() => this.setState({ leftPortalOpen: false })}>
              {closePortal => (
                <div
                  style={{
                    width: '100px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ rightPortalOpen: true })}
            >
                Open Right Portal
            </Button>
            {this.state.rightPortalOpen && (
            <Portal right onClose={() => this.setState({ rightPortalOpen: false })}>
              {closePortal => (
                <div
                  style={{
                    width: '100px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ bottomPortalOpen: true })}
            >
                Open Bottom Portal
            </Button>
            {this.state.bottomPortalOpen && (
            <Portal bottom onClose={() => this.setState({ bottomPortalOpen: false })}>
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
          </DemoCard>

          <DemoCard
            title="Auto Close"
            sourceCode={autoCloseCode}
            externalSampleLink={autoCloseLink}
          >
            <h6 className="pb-3">
              By default the portal closes when clicking outside the portal
               but that can be disabled by passing
              {' '}
              {'autoClose={false}'}
            </h6>
            <Button
              onClick={() => this.setState({ autoClosePortalOpen: true })}
            >
                Open Portal
            </Button>
            {this.state.autoClosePortalOpen && (
            <Portal top autoClose={false}>
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={
                        () => {
                          this.setState({ autoClosePortalOpen: false });
                          closePortal();
                        }}
                  />
                </div>
              )}
            </Portal>
            )}
          </DemoCard>

          <DemoCard
            title="Hide Backdrop"
            sourceCode={hideBackdropCode}
            externalSampleLink={hideBackdropLink}
          >
            <h6 className="pb-3">
                To make the backdrop opaque
            </h6>
            <Button
              onClick={() => this.setState({ hideBackdropPortalOpen: true })}
            >
                Open Portal
            </Button>
            {this.state.hideBackdropPortalOpen && (
            <Portal
              top
              hideBackDrop
              onClose={() => this.setState({ hideBackdropPortalOpen: false })}
            >
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
          </DemoCard>

          <DemoCard
            title="onClose Event"
            sourceCode={onCloseCode}
            externalSampleLink={onCloseLink}
          >
            <Button
              onClick={() => this.setState({ onClosePortal: true })}
            >
                Open Portal
            </Button>
            {this.state.onClosePortal && (
            <Portal top onClose={() => { this.setState({ onClosePortal: false }); alert('Closed'); }}>
              {closePortal => (
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <input
                    style={{ fontSize: '20px' }}
                    type="button"
                    value="Close"
                    onClick={closePortal}
                  />
                </div>
              )}
            </Portal>
            )}
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

export default withHeader(PortalDemo);
