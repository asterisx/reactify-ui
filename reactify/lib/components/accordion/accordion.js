import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleDown } from 'react-icons/fa';
import { styles } from './styles';

class Accordion extends Comment {
    static item = ({
      children,
      index,
      open,
      onHeaderClick,
    }) => (
      <div
        css={[
          styles.item,
        ]}
      >
        {React.Children.map(children, (child) => {
          if ((child.type === Accordion.body) && !open) {
            return null;
          } if (child.type === Accordion.body) {
            return React.cloneElement(child, {
              toggleItem: () => onHeaderClick(index),
            });
          }
          return child;
        })}
      </div>
    )

    static header = ({
      children,
      icon,
      showIcon,
      disabled,
      toggleItem,
    }) => (typeof children === 'function' ? children({ toggleItem, disabled })
      : (
        <div css={[
          styles.header,
          styles.getDisabledStyle({ disabled }),
        ]}
        >
          {children}
          {showIcon && <span onClick={toggleItem}>{icon || <FaAngleDown />}</span>}
        </div>
      ))

    static body = ({
      children,
    }) => (
      <div css={[
        styles.body,
      ]}
      >
        {children}
      </div>
    )

    state = {
      openAccordionIndexes: [],
    }

    componentDidMount() {
      React.Children.forEach(this.props.children, (child) => {
        if (child.props.open) { this.toggleState(child.props.index); }
      });
    }

    static getDerivedStateFromProps(props) {
      let openindexs = [];
      React.Children.forEach(props.children, (child) => {
        if (props.singular && child.open) {
          openindexs = [child.index];
        } else if (props.multiple && !props.singular && child.open) {
          openindexs.push(child.index);
        }
      });
      return { openindexs };
    }

    render() {
      const {
        children,
        singular,
        multiple,
        ...otherProps
      } = this.props;
      const { openAccordionIndexes } = this.state;
      return (
        <div
          css={[
            styles.accordion,
          ]}
          {...otherProps}
        >
          {React.Children.map(children, (child) => {
            if (child.type === Accordion.Item) {
              return React.cloneElement(child, {
                open: openAccordionIndexes.findIndex(sk => sk === child.props.index) !== -1,
              });
            }
            return child;
          })}
        </div>
      );
    }
}

Accordion.propTypes = {
  singular: PropTypes.bool,
  multiple: PropTypes.bool,
};

Accordion.defaultProps = {
  singular: false,
  multiple: true,
};

export default Accordion;
