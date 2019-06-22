import { commonStyles, libraryName } from '../../common';

const componentName = 'switch';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    appearance: 'none',
    height: '1.4em',
    width: '4em',
    backgroundColor: 'darkgray',
    borderRadius: '4em',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
    margin: '0 .2em',

    '&::after': {
      content: '""',
      width: '1.6em',
      height: '1.6em',
      backgroundColor: 'white',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '100%',
      transition: '.3s',
    },
    '&:checked': {
      '&::after': {
        content: '""',
        transform: 'translateX(2.4em) translateY(-50%)',
        backgroundColor: 'currentColor',
      },
    },
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getThemedStyle: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  }) => ({
    '&:checked': {
      '&::after': {
        content: '""',
        ...(commonStyles.get.backgroundColor.forTheme({
          primary,
          secondary,
          dark,
          light,
          info,
          warning,
          danger,
          success,
          theme,
        })),
      },
    },
  }),

  getDisabledStyle: commonStyles.get.disabled.style,
};
