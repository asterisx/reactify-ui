/* eslint-disable react/jsx-indent */
import React from 'react';
import Link from 'next/link';
import Highlight from 'react-highlight';
import {
  Breadcrumbs,
  Paper,
  Link as LibLink,
  Text,
} from '@../../../../reactify-ui/build';
import { withHeader } from '../../common';

const Installation = () => (
  <div className="w-100 d-flex flex-column mt-3">
    <Breadcrumbs className="ml-2 align-self-start">
      <Breadcrumbs.Item key={0}>
        <Link
          href="/"
          as={process.env.HOST}
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
    <Paper className="d-block width-m-95 width-50 p-3 m-1 mt-5 align-self-center" secondary>
      <h4>To install the library </h4>
      <Highlight className="javascript html"> npm i reactify-ui </Highlight>
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
      <LibLink>
        <Link
          href="/documentation/accordion"
          as={`${process.env.HOST}/documentation/accordion`}
        >
          Check out the documentation.
        </Link>
      </LibLink>
    </div>
  </div>
);

export default withHeader(Installation);
