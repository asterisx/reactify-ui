import React from 'react';
import PropTypes from 'prop-types';
import {
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import {
  Button,
  Link,
} from '../../../reactify-ui/build';

const BottomNav = ({
  prevLinkText,
  prevLink,
  nextLinkText,
  nextLink,
  className,
  ...otherProps
}) => (prevLink || nextLink)
  && (
  <div
    className={`w-100 d-flex ${className || ''}`}
    {...otherProps}
  >
    {prevLink && (
      <div className="d-inline">
        <Link style={{ textDecoration: 'none' }} href={process.env.HOST + prevLink}>
          <Button
            light
            large
            className="d-inline-flex align-items-center text-center"
          >
            <FaAngleLeft className="mr-1" />
            {prevLinkText}
          </Button>
        </Link>
      </div>
    )}

    {nextLink && (
      <div className="d-inline ml-auto">
        <Link style={{ textDecoration: 'none' }} href={process.env.HOST + nextLink}>
          <Button
            light
            large
            className="d-inline-flex align-items-center text-center"
          >
            {nextLinkText}
            <FaAngleRight className="ml-1" />
          </Button>
        </Link>
      </div>
    )}
  </div>
  );

BottomNav.propTypes = {
  prevLinkText: PropTypes.string,
  prevLink: PropTypes.string,
  nextLinkText: PropTypes.string,
  nextLink: PropTypes.string,
};

BottomNav.defaultProps = {
  prevLinkText: undefined,
  prevLink: undefined,
  nextLinkText: undefined,
  nextLink: undefined,
};

export default BottomNav;
