import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft } from 'react-icons/fa';
import { styles, BEMClassNames } from './styles';
import SidebarItem from '../sidebar-item';

const SubSidebar = ({
  items,
  children,
  positionFull,
  header,
  onHeaderClick,
  className,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      positionFull && styles.w100,
      positionFull ? styles.positionFull : styles.positionLeft,
    ]}
    className={`${className || ''} ${BEMClassNames.container}`}
    {...otherProps}
  >
    {positionFull && (
    <div
      css={[
        styles.headerStyle,
      ]}
      onClick={(event) => { event.stopPropagation(); onHeaderClick(); }}
    >
      <FaAngleLeft />
      {header}
    </div>
    )}
    <ul
      css={[
        styles.list,
        positionFull && styles.w100,
      ]}
    >
      {children
        ? React.Children.map(children,
          child => (child.type !== SidebarItem ? child : React.cloneElement(child, {
            positionFull,
          }))) : (items && items.length && items.map(item => (
            <SidebarItem
              positionFull={positionFull}
              {...item}
            />
        )))}
    </ul>
  </div>
);

SubSidebar.propTypes = {
  /**
   * A collection of a array of shape
   * text: PropTypes.string,
   * content: PropTypes.any,
   * `Of same shape as items`
   * sub: PropTypes.any,
   * disabled: PropTypes.bool,
   */
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * [INTERNAL] The header text
   */
  // eslint-disable-next-line react/forbid-prop-types
  header: PropTypes.any,
  /**
   * [INTERNAL] Callback on click
   */
  onHeaderClick: PropTypes.func,
  /**
   * If 'true', the sub sidebar are position
   * absolutely and take up the whole space
   * This makes it possible to have a 'stack' like effect
   * Default is 'false'
   */
  positionFull: PropTypes.bool,
};

SubSidebar.defaultProps = {
  items: undefined,
  header: undefined,
  onHeaderClick: undefined,
  positionFull: false,
};

export default SubSidebar;
