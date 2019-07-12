import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { FaCode, FaPen } from 'react-icons/fa';
import {
  Accordion,
  Button,
  Link,
  Paper,
} from '../../../reactify-ui/build';

class DemoCard extends Component {
  state = { isShowingCode: false }

  toggleShowCode = () => {
    this.setState(prevProps => ({ isShowingCode: !prevProps.isShowingCode }));
  }

  render() {
    const {
      title,
      children,
      className,
      sourceCode,
      externalSampleLink,
    } = this.props;

    const {
      isShowingCode,
    } = this.state;

    const {
      toggleShowCode,
    } = this;

    return (
      <Accordion light className={`${className || ''} mt-md-5 mt-3`}>
        <Accordion.Item index={1}>
          <Accordion.Header>
            {({ toggleItem }) => (
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="d-inline-block">{title}</h3>
                  <div>
                    <Button light onClick={() => { toggleItem(); toggleShowCode(); }} className="text-muted">
                      <FaCode />
                      <span className="ml-1 d-none d-lg-inline">
                        {`${isShowingCode ? 'Hide' : 'Show'} Code`}
                      </span>
                    </Button>

                    <Link dark href={externalSampleLink}>
                      <Button disabled={!externalSampleLink} light className="text-muted">
                        <FaPen />
                        <span className="ml-1 d-none d-lg-inline">Edit on Stackblitz</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Paper secondary noShadow style={{ background: '#F2F1EF' }} className="w-100 p-lg-3 p-1">
                    {children}
                  </Paper>
                </div>
              </div>
            )}
          </Accordion.Header>
          <Accordion.Body className="p-0">
            <Paper light noShadow className="w-100 child-pre-m-0 border-left border-right border-bottom">
              <Highlight className="javascript html m-0 overflow-auto">{sourceCode.trim()}</Highlight>
            </Paper>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default DemoCard;
