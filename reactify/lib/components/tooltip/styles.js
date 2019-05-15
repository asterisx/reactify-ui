import { commonStyles, libraryName } from '../../common';

const componentName = 'tooltip';

export const BEMClassNames = {
  bubble: `${libraryName}-${componentName}__bubble`,
};

export const styles = {
  container: {
    position: 'relative',
  },
  bubble: {
    display: 'table',
    position: 'absolute',
    zIndex: '10000 !important',
    '::after': {
      content: "''",
      position: 'absolute',
    },
  },

  getPositionStyle: ({
    top,
    bottom,
    left,
    right,
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  }) => {
    const themeColor = commonStyles.get.theme.color({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    });
    if (bottom) {
      return {
        top: '100%',
        left: '50%',
        paddingTop: '9px',
        transform: 'translateX(-50%)',
        '::after': {
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderBottom: `9px solid ${themeColor}`,
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      };
    }

    if (left) {
      return {
        top: '50%',
        right: '100%',
        paddingRight: '9px',
        transform: 'translateY(-50%)',
        '::after': {
          borderLeft: `9px solid ${themeColor}`,
          borderTop: '9px solid transparent',
          borderBottom: '9px solid transparent',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
        },
      };
    }

    if (right) {
      return {
        top: '50%',
        left: '100%',
        paddingLeft: '9px',
        transform: 'translateY(-50%)',
        '::after': {
          borderRight: `9px solid ${themeColor}`,
          borderTop: '9px solid transparent',
          borderBottom: '9px solid transparent',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
        },
      };
    }

    if (top) {
      return {
        bottom: '100%',
        left: '50%',
        paddingBottom: '9px',
        transform: 'translateX(-50%)',
        '::after': {
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderTop: `9px solid ${themeColor}`,
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      };
    }

    return null;
  },

  getFontSizeStyle: ({
    small,
    medium,
    large,
  }) => {
    if (small) {
      return {
        fontSize: '0.4em',
      };
    }

    if (large) {
      return {
        fontSize: '1.2em',
      };
    }

    if (medium) {
      return {
        fontSize: '0.8em',
      };
    }

    return null;
  },

  getContentStyle: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  }) => {
    const bgStyle = commonStyles.get.backgroundColor.forTheme({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    });

    const fontStyle = commonStyles.get.font.color.forTheme({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    });

    return {
      ...bgStyle,
      borderRadius: '3px',
      ...fontStyle,
      lineHeight: '1.4',
      padding: '.3em',
      textAlign: 'center',
    };
  },
};
