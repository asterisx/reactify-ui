import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupToggle from '../group-toggle';
import { BEMClassNames } from './styles';

const Tab = ({
  children,
}) => children;

const getContent = ({ children, currentActiveTabIndex }) => {
  const groupToggleItems = [];
  const bodyItems = [];
  React.Children.forEach(children, (child) => {
    if (child.type === Tab) {
      React.Children.forEach(child.props.children, (ch) => {
        if (ch.type.displayName === 'Tab.Header') {
          groupToggleItems.push(
            React.cloneElement(
              ch.props.children,
              {
                key: child.props.index,
                index: child.props.index,
              },
            ),
          );
        } else if (ch.type.displayName === 'Tab.Body') {
          bodyItems.push(
            React.cloneElement(
              ch,
              {
                key: child.props.index,
                visible: (currentActiveTabIndex === child.props.index),
              },
            ),
          );
        }
      });
    }
  });
  return {
    groupToggleItems, bodyItems,
  };
};

Tab.Header = ({ children = null }) => children;
Tab.Header.displayName = 'Tab.Header';

Tab.Body = ({ visible, children = null }) => (visible ? children : null);

Tab.Body.displayName = 'Tab.Body';

class Tabs extends Component {
    state = { currentActiveTabIndex: this.props.selectedIndex };

    render() {
      const {
        children = null, onSelectionChange, selectedIndex, tabsDisabled, ...otherProps
      } = this.props;
      const { currentActiveTabIndex } = this.state;
      const {
        groupToggleItems, bodyItems,
      } = getContent({ children, currentActiveTabIndex });
      return (
        <div {...otherProps}>
          <div className={BEMClassNames.toggle}>
            <GroupToggle
              disabled={tabsDisabled}
              selectedIndex={this.state.currentActiveTabIndex}
              onSelectionChange={(index) => {
                this.setState({ currentActiveTabIndex: index }); onSelectionChange(index);
              }}
            >
              {groupToggleItems.map(item => item)}
            </GroupToggle>
          </div>
          {bodyItems.map(item => item)}
        </div>
      );
    }
}

Tabs.propTypes = {
  selectedIndex: PropTypes.number,
  tabsDisabled: PropTypes.bool,
  onSelectionChange: PropTypes.func,
};

Tabs.defaultProps = {
  selectedIndex: 0,
  tabsDisabled: false,
  onSelectionChange: () => {},
};

Tab.Body.propTypes = {
  visible: PropTypes.bool,
};

Tab.Body.defaultProps = {
  visible: false,
};

export { Tabs, Tab };
