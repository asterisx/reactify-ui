import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoPrimitiveDot } from 'react-icons/go';
import SubSidebar from '../sub-sidebar';
import { styles, BEMClassNames } from './styles';

class SidebarItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    /**
     * If passed, this is all that goes inside the menu item,
     * text, icon and drop down icon are not shown/ ignored
     */
    // eslint-disable-next-line react/forbid-prop-types
    content: PropTypes.any,
    /**
     * An object of shape
     * openIcon: PropTypes.any,
     * closeIcon: PropTypes.any,
     * text: PropTypes.string,
     * content: PropTypes.any,
     * `Of same shape as sub`
     * sub: PropTypes.any,
     * disabled: PropTypes.bool,
     */
    // eslint-disable-next-line react/forbid-prop-types
    sub: PropTypes.any,
    /**
     * If 'true', the menu item is disabled,
     * Default is 'false'
     */
    disabled: PropTypes.bool,
    /**
     * If 'true', the sub sidebar are position
     * absolutely and take up the whole space
     * This makes it possible to have a 'stack' like effect
     * Default is 'false'
     */
    positionFull: PropTypes.bool,
  }

  static defaultProps = {
    text: '',
    content: undefined,
    sub: undefined,
    disabled: false,
    positionFull: false,
  }

  state = { subOpen: false };

  toggleSub = () => {
    this.setState(prevState => ({ subOpen: !prevState.subOpen }));
  };

  render() {
    const {
      children,
      text,
      content,
      sub,
      disabled,
      positionFull,
      className,
      ...otherProps
    } = this.props;

    const { subOpen } = this.state;
    const { toggleSub } = this;
    const childrenArray = React.Children.toArray(children);

    /* If 'sub' is passed, subSidebar is to be programatically created
     */
    let subSidebar = sub ? (
      <SubSidebar
        positionFull={positionFull}
        header={text || content}
        onHeaderClick={toggleSub}
        items={sub}
      />
    ) : (
      childrenArray.find(child => child && child.type === SubSidebar)
    );

    subSidebar = subSidebar
      ? React.cloneElement(subSidebar,
        {
          positionFull,
          onHeaderClick: toggleSub,
          header: text || content,
        }) : undefined;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        css={[
          !content && styles.item,
          !positionFull && styles.positionRelative,
          positionFull && styles.w100,
          styles.getDisabledStyle({
            disabled,
          }),
        ]}
        onClick={(event) => { event.stopPropagation(); if (subSidebar) toggleSub(); }}
        className={`${className} ${BEMClassNames.container}`}
        {...otherProps}
      >
        <span
          css={[
            styles.dflexCenter,
          ]}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {(subSidebar && !content) ? <GoPrimitiveDot css={[styles.dot]} /> : (content ? undefined
            : (
              <span css={[
                styles.placeHolder,
              ]}
              />
            )
          )}
          {/* eslint-disable-next-line no-nested-ternary */}
          {content
            ? typeof content === 'function' ? content({
              isSubOpen: subOpen,
              toggleSub: (event) => { if (event) event.stopPropagation(); toggleSub(); },
            }) : content
            : text
        }
        </span>
        {subOpen && subSidebar}
      </li>
    );
  }
}

export default SidebarItem;
