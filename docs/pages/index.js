import React from 'react';
import { FaCheck, FaMobile } from 'react-icons/fa';
import { Link, Paper, Text } from '@../../../../reactify-ui/build';
import { withHeader } from '../common';

const index = () => (
  <div className="p-3 w-100 align-self-start h-800px justify-self-center d-flex flex-column align-items-center justify-content-center">
    <Text className="d-block logo" success style={{ fontSize: '4em' }}>
      <i>reactify ui</i>
    </Text>
    <Paper
      noShadow
      secondary
      className="d-block text-justify p-3 mb-3"
      medium
    >
      A feature rich and customizable React UI Components Library
    </Paper>

    <div>
      <Text
        dark
        className="d-flex align-items-center"
      >
        <FaCheck className="mr-4" />
        57+ Components
      </Text>

      <Text
        dark
        className="d-flex align-items-center mt-2"
      >
        <FaMobile className="mr-4" />
        Responsive design
      </Text>

      <Text
        dark
        className="d-flex align-items-center mt-2"
      >
        <FaCheck className="mr-4" />
        In-built theming
      </Text>

      <Text
        dark
        className="d-flex align-items-center mt-2 mb-4"
      >
        <FaCheck className="mr-4" />
        Completely free and open source
      </Text>
    </div>

    <Link
      href={`${process.env.HOST}/getting-started/installation`}
    >
      Get Started
    </Link>
  </div>
);
export default withHeader(index);
