import React from 'react';
import PropTypes from 'prop-types';
import HeirarchyViewItem from './components';
import { styles } from './styles';

const HeirarchyView = ({
  item,
  vertical,
  children,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
    ]}
    {...otherProps}
  >
    {children
      || (item ? (
        <HeirarchyViewItem
          vertical={vertical}
          {...item}
        />
      ) : undefined)
    }
  </div>
);

HeirarchyView.Item = HeirarchyViewItem;

HeirarchyView.propTypes = {
  /**
   * Of shape
   * `A single item of shape:`
   * text: PropTypes.string,
   * content: PropTypes.any,
   * `And array or object of same shape as item`
   */
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.any,
  /**
   * If 'true', the heirarchy view is displayed vertically
   * Default is 'false'
   */
  vertical: PropTypes.bool,
};

HeirarchyView.defaultProps = {
  item: undefined,
  vertical: false,
};

export default HeirarchyView;
