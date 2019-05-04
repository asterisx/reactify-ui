import React, { Component } from 'react';
import { Modal, Button } from '@../../../../reactify/build';
import {
  autoCloseCode,
  hideBackdropCode,
  simpleCode,
  modalSizeCode,
  onCloseCode,
} from './code-refrence';
import './modal.scss';
import DemoCard from '../../components/demo-card';

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
        <div>
          <DemoCard
            title="Simple Use"
            uniqueIdentifier="simpleUse"
            sourceCode={simpleCode}
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
            title="Modal Location"
            uniqueIdentifier="ModalLocationUse"
            sourceCode={modalSizeCode}
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
            <br />
          </DemoCard>

          <DemoCard
            title="Auto Close"
            uniqueIdentifier="autoCloseUse"
            sourceCode={autoCloseCode}
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
            uniqueIdentifier="hideBackdropUse"
            sourceCode={hideBackdropCode}
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
            uniqueIdentifier="onCloseUse"
            sourceCode={onCloseCode}
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
        </div>
      );
    }
}

export default ModalDemo;
