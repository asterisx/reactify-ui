import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaMobile } from 'react-icons/fa';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';
import {
  Button,
  Link,
} from '../../../reactify-ui/build';

const ComponentInfo = ({
  productionReady,
  responsive,
  githubLink,
}) => (
  <div className="d-flex flex-row justify-content-between align-items-center border-bottom pb-1 mb-5 text-muted">
    <div className="d-flex flex-row justify-content-between align-items-center">
      {productionReady && (
      <div className="d-flex flex-row align-items-center">
        <FaCheckCircle />
        <span className="ml-1 d-none d-lg-inline">Ready for production</span>
      </div>
      )}

      {responsive && (
      <div className={`d-flex flex-row align-items-center ${productionReady ? 'ml-1' : ''}`}>
        <FaMobile />
        <span className="ml-1 d-none d-lg-inline">Responsive</span>
      </div>
      )}
    </div>
    {githubLink && (
    <Button light>
      <Link href={githubLink} className="d-flex align-items-center text-muted">
        <Octicon icon={MarkGithub} size="small" ariaLabel="GitHub" />
        <span className="ml-1 d-none d-lg-inline d-xl-inline">Check the source</span>
      </Link>
    </Button>
    )}
  </div>
);

ComponentInfo.propTypes = {
  productionReady: PropTypes.bool,
  responsive: PropTypes.bool,
  githubLink: PropTypes.string,
};

ComponentInfo.defaultProps = {
  productionReady: false,
  responsive: false,
  githubLink: undefined,
};

export default ComponentInfo;
