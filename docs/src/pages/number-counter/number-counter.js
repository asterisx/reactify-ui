/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import { NumberCounter } from 'reactify';
import {
  simpleCode,
} from './code-refrence';
import './number-counter.scss';
import DemoCard from '../../components/demo-card';

class NumberCounterDemo extends Component {
  state = {simpleCounter: {from:1000, to: 9876, show: true}};
  render() {
    return (
      <div>
        <DemoCard
          title="Simple Use"
          uniqueIdentifier="simpleUse"
          sourceCode={simpleCode}
        >
          {this.state.simpleCounter.show && <NumberCounter
            from={this.state.simpleCounter.from}
            to={this.state.simpleCounter.to}
            reset={this.state.simpleCounter.reset}
          />}

          <button
            className="btn btn-primary d-inline ml-3"
            onClick={() => { 
              this.setState({ simpleCounter: { from: 1000, to: 9876, show: false} });
              setTimeout(() => this.setState({ simpleCounter: { from: 1000, to: 9876, show: true } }),
              0);
            }
          }
          >
            Reset
          </button>
        </DemoCard>
      </div>
    )
  }

}

export default NumberCounterDemo;
