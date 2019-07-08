import React from 'react';
import Link from 'next/link';
import { Text } from '@../../../../reactify-ui/build';
import { withHeader } from '../common';

const index = () => (
  <div className="p-3 w-100 align-self-center justify-self-center d-flex flex-column align-items-center justify-content-center">
    <Text className="d-block logo" success style={{ fontSize: '4em' }}>
      <i>reactify ui</i>
    </Text>
    <Text className="d-block text-justify mb-3" large>A feature rich and customizable React UI Components Library</Text>
    <Link
      href="/getting-started/installation"
      as={`${process.env.HOST}/getting-started/installation`}
    >
      Get Started
    </Link>
  </div>
);
export default withHeader(index);
