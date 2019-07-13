/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Modal, Button } from '@../../../../reactify-ui/build';
import {
  hideBackdropCode,
  simpleCode,
  modalSizeCode,
  notAutoCloseCode,
  onCloseCode,
} from './code-refrence';

import {
  hideBackdropLink,
  onCloseLink,
  modalSizeLink,
  notAutoCloseLink,
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
    text: 'Login',
    link: `${Constants.componentsPath}/login`,
  },
  nextLink: {
    text: 'Number Counter',
    link: `${Constants.componentsPath}/number-counter`,
  },
};

class ModalDemo extends Component {
    state = {
      simpleModalOpen: false,
      smallModalOpen: false,
      mediumModalOpen: false,
      largeModalOpen: false,
      customSizeModal: false,
      autoCloseModalOpen: false,
      hideBackdropModalOpen: false,
      onCloseModal: false,
    };

    render() {
      return (
        <DemoPage componentName="Modal">
          <ComponentInfo
            productionReady
            responsive
            githubLink={`${Constants.githubComponentsPath}/modal`}
          />
          <DemoCard
            title="Simple Use"
            sourceCode={simpleCode}
            externalSampleLink={simpleLink}
          >
            <Button onClick={() => this.setState({ simpleModalOpen: true })}>Open Modal</Button>
            {this.state.simpleModalOpen && (
            <Modal onClose={() => this.setState({ simpleModalOpen: false })}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
          </DemoCard>

          <DemoCard
            title="Modal Size"
            sourceCode={modalSizeCode}
            externalSampleLink={modalSizeLink}
          >
            <Button
              onClick={() => this.setState({ smallModalOpen: true })}
            >
              Open Small Modal
            </Button>
            {this.state.smallModalOpen && (
            <Modal small onClose={() => this.setState({ smallModalOpen: false })}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ mediumModalOpen: true })}
            >
                Open Medium Modal
            </Button>
            {this.state.mediumModalOpen && (
            <Modal medium onClose={() => this.setState({ mediumModalOpen: false })}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ largeModalOpen: true })}
            >
                Open Large Modal
            </Button>
            {this.state.largeModalOpen && (
            <Modal large onClose={() => this.setState({ largeModalOpen: false })}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
            <br />
            <br />
            <Button
              onClick={() => this.setState({ customSizeModal: true })}
            >
                Open Custom Size Modal
            </Button>
            {this.state.customSizeModal && (
            <Modal style={{ width: '90%' }} onClose={() => this.setState({ customSizeModal: false })}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
          </DemoCard>

          <DemoCard
            title="Auto Close (not)"
            sourceCode={notAutoCloseCode}
            externalSampleLink={notAutoCloseLink}
          >
            <h6 className="pb-3">
              By default the Modal closes when clicking outside the Modal
               but that can be disabled by passing
              {' '}
              {'autoClose={false}'}
            </h6>
            <Button
              onClick={() => this.setState({ autoCloseModalOpen: true })}
            >
                Open Modal
            </Button>
            {this.state.autoCloseModalOpen && (
            <Modal autoClose={false}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                          this.setState({ autoCloseModalOpen: false });
                          closeToggle();
                        }}
                  />
                </div>
              )}
            </Modal>
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
              onClick={() => this.setState({ hideBackdropModalOpen: true })}
            >
                Open Modal
            </Button>
            {this.state.hideBackdropModalOpen && (
            <Modal
              hideBackDrop
              onClose={() => this.setState({ hideBackdropModalOpen: false })}
            >
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
            )}
          </DemoCard>

          <DemoCard
            title="onClose Event"
            sourceCode={onCloseCode}
            externalSampleLink={onCloseLink}
          >
            <Button
              onClick={() => this.setState({ onCloseModal: true })}
            >
                Open Modal
            </Button>
            {this.state.onCloseModal && (
            <Modal top onClose={() => { this.setState({ onCloseModal: false }); alert('Closed'); }}>
              {closeToggle => (
                <div
                  style={{
                    width: '100%',
                    height: '250px',
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
                    onClick={closeToggle}
                  />
                </div>
              )}
            </Modal>
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

export default withHeader(ModalDemo);
