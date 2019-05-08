import { commonStyles, libraryName } from '../../common';

const componentName = 'snackbar';

export const BEMClassNames = {
  dismiss: `${libraryName}-${componentName}__dismiss`,
  message: `${libraryName}-${componentName}__message`,
  action: `${libraryName}-${componentName}__action`,
};

export const styles = {
  container: Object.assign(
    {
      position: 'fixed',
      opacity: '0.9',
      display: 'inline',
      borderRadius: '3px',
      transitionDuration: '50ms',
    },
    commonStyles.zdIndex.z100000,
  ),
  options: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '0.4em 0.8em',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
  paddingBoth: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  position: {
    topLeft: {
      top: '10px',
      left: '10px',
    },
    topRight: {
      top: '10px',
      right: '10px',
    },
    bottomRight: {
      bottom: '10px',
      right: '10px',
    },
    bottomLeft: {
      bottom: '10px',
      left: '10px',
    },
  },

  getPositionStyles: ({
    topRight,
    bottomRight,
    bottomLeft,
    topLeft,
  }) => Object.entries({
    topRight,
    bottomRight,
    bottomLeft,
    topLeft,
  }).reduce(
    (positionStyle, [key, isTrue]) => (
      isTrue ? styles.position[key] : positionStyle
    ), {},
  ),

  getThemedBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
