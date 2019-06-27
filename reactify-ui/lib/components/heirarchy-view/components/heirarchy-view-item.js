import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const HeirarchyViewItem = ({
  text,
  content,
  sub,
  vertical,
  children,
  ...otherProps
}) => {
  const directionStyles = vertical ? styles.vertical : styles.horizontal;
  const childrenArray = React.Children
    .toArray(children)
    .map(child => (child.type === HeirarchyViewItem
      ? React.cloneElement(child, { vertical })
      : child));

  /* If 'sub' is passed, subtree is to be programatically created
   */
  if (Array.isArray(sub)) {
    childrenArray.push(...sub.map(item => <HeirarchyViewItem vertical={vertical} {...item} />));
  } else if (sub) {
    childrenArray.push(<HeirarchyViewItem vertical={vertical} {...sub} />);
  }

  return (
    <div
      css={[
        directionStyles.container,
      ]}
      {...otherProps}
    >
      {(content || text) && (
      <div css={[
        directionStyles.content,
      ]}
      >
        {content || text}
      </div>
      )}

      {childrenArray && childrenArray.length
        ? (
          <div css={[
            directionStyles.childContainer,
          ]}
          >
            {childrenArray.map((child, index) => (
              /**
               * We could avoid wasting a node all together
               * Currently if we pass the css prop to the child component,
               * it will overrite its own css if props are drilled down to its root as is,
               * which is true for most of the library's components.
               * [TODO] Is the key used here a good idea?
               */
              <div
                css={[
                  directionStyles.child,
                ]}
                // eslint-disable-next-line react/no-array-index-key
                key={`${child.props.content}-${child.props.text}-${childrenArray.length}-${index}`}
              >
                {child}
              </div>
            ))}
          </div>
        ) : undefined
    }
    </div>
  );
};

HeirarchyViewItem.propTypes = {
  /**
   * Content accepts any valid React component or text or number or value.
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any,
  /**
   * The 'text' value itself.
   */
  text: PropTypes.string,
  /**
     * A collection or a single object array of shape
     * text: PropTypes.string,
     * content: PropTypes.any,
     * `And array or object of same shape as sub`
     * sub: PropTypes.any,
     */
  // eslint-disable-next-line react/forbid-prop-types
  sub: PropTypes.any,
  /**
   * If 'true', the heirarchy view is displayed vertically
   * Default is 'false'.
   * `WARNING`: This value is used passed down from HeirarchyView to HeirarchyView.Item
   * and should not be passed directly to HeirarchyView.Item
   */
  vertical: PropTypes.bool,
};

HeirarchyViewItem.defaultProps = {
  content: undefined,
  text: undefined,
  sub: undefined,
  vertical: false,
};

export default HeirarchyViewItem;
