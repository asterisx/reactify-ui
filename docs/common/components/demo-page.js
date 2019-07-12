import React from 'react';

const DemoPage = ({
  componentName,
  className,
  children,
  ...otherProps
}) => (
  <div
    className={`w-100 ml-2 ml-md-5 mr-2 mr-md-5 mt-2 mt-md-3 mb-2 mb-md-3 ${className || ''}`}
    {...otherProps}
  >
    <h1>{componentName}</h1>
    {children}
  </div>
);

export default DemoPage;
