/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { SnackBar as SnackBarComponent } from 'reactify';

class SnackBar extends Component {
  state = { showSimpleSnackbar: false, showImageSnackBar: false };

  render() {
    return (
      <div>
        <section>
          <h4>
          Simple Implementation
          </h4>
          <button className="btn btn-primary" onClick={() => this.setState({ showSimpleSnackbar: true })}>Show SnackBar</button>
          {this.state.showSimpleSnackbar && <SnackBarComponent onClose={() => this.setState({ showSimpleSnackbar: false })} delay={1000} action="undo" onActionClick={() => this.setState({ showSimpleSnackbar: false })} message="SnackBar :)" />}
        </section>

        <section>
          <h4>
          Can accept any children
          </h4>
          <button className="btn btn-primary" onClick={() => this.setState({ showImageSnackBar: true })}>Show SnackBar</button>
          {this.state.showImageSnackBar && <SnackBarComponent onClose={() => this.setState({ showImageSnackBar: false })} theme="light" delay={5000}><img alt="" width="auto" height="100px" src="https://i.gifer.com/YYdO.gif" /></SnackBarComponent>}
        </section>
      </div>
    );
  }
}

export default SnackBar;
