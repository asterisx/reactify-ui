import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const BreadCrumbs = ({
  items,
  children,
  seperator,
  disabled,
  ...otherProps
}) => {
  const mergedChidren = items.map(item => <BreadCrumbs.Item {...item} />)
    .concat(React.Children.toArray(children))
    // eslint-disable-next-line react/no-array-index-key
    .reduce((arr, curr, index) => arr.concat([curr, <li key={`seperator${index}`}>{seperator}</li>]), [])
    .slice(0, -1);

  return (
    <ul
      css={[
        styles.list,
        disabled && styles.getDisabledStyle({ disabled }),
      ]}
      {...otherProps}
    >
      {mergedChidren}
    </ul>
  );
};

BreadCrumbs.propTypes = {
  /**
   * The items themeselves. It is an array with elements of form
   * { key: number (reuired), content: any, ...otherValues (these are drilled directly to the li) }
   */
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * The seperator which is used to seperate
   * two breadcrumb items
   */
  // eslint-disable-next-line react/forbid-prop-types
  seperator: PropTypes.any,
  /**
   * If 'true', the component is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
};

BreadCrumbs.defaultProps = {
  items: [],
  seperator: '/',
  disabled: false,
};

BreadCrumbs.Item = ({
  content,
  children,
  disabled,
  ...otherProps
}) => (
  <li
    css={[
      disabled && styles.getDisabledStyle({ disabled }),
    ]}
    {...otherProps}
  >
    {content || children}
  </li>
);

BreadCrumbs.Item.propTypes = {
  /**
   * The content itself, accepts anything, even nothing
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any,
  /**
   * If 'true', the item is disabled
   * Default is 'false'
   */
  disabled: PropTypes.bool,
};

BreadCrumbs.Item.defaultProps = {
  content: undefined,
  disabled: false,
};

export default BreadCrumbs;
