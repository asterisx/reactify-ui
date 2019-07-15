/* eslint-disable react/jsx-indent */
import React from 'react';
import Highlight from 'react-highlight';
import {
  Breadcrumbs,
  Paper,
  Link,
  Text,
} from '../../../reactify-ui/build';
import { withHeader } from '../../common';

const Installation = () => (
  <div className="w-100 h-max-md-100 h-800px d-flex flex-column mt-3">
    <Breadcrumbs className="ml-2 align-self-start">
      <Breadcrumbs.Item key={0}>
        <Link
          href={process.env.HOST}
        >
          Home
        </Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item key={1}>
        Getting Started
      </Breadcrumbs.Item>
      <Breadcrumbs.Item key={1}>
        Installation
      </Breadcrumbs.Item>
    </Breadcrumbs>

    <div className="w-100 d-flex h-max-md-100 flex-column align-items-center justify-content-center">
      <Paper className="d-block width-m-95 width-50 p-3 m-1 mt-md-5 align-self-center" secondary>
        <h4>To install the library </h4>
        <Highlight className="javascript html">npm i reactify-ui</Highlight>
      </Paper>
      <Paper className="d-block width-m-95 width-50 p-3 m-1 mt-5 align-self-center" secondary>
        <h4>Basic Usage </h4>
        <Highlight className="javascript html">
  {`import { Button } from 'reactify-ui';

  export default Page = () => <div>
    <Button>Primary Button</Button>
  </div>
  `}
        </Highlight>
      </Paper>
      <div className="mt-4 align-self-center width-m-95">
        <Text className="mr-1">
          Looking for next steps?
        </Text>
          <Link
            href={`${process.env.HOST}/components/accordion`}
          >
            Check out the components.
          </Link>
      </div>
    </div>
  </div>
);

export default withHeader(Installation, 'h-max-md-100');
