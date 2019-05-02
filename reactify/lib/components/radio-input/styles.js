import { commonStyles, libraryName } from '../../common';

const componentName = 'radio-input';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
    minHeight: '1.7em',
    outline: 'none',
  },
  input: {
    appearance: 'none',
    height: '1.6em',
    width: '1.6em',
    padding: '0.1em',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',

    '&::after': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      borderRadius: '100%',
      padding: '.2em',
      border: '.1em solid darkgray',
      pointerEvents: 'none',
      backgroundClip: 'content-box',
      transition: '.3s',
    },
    '&:checked': {
      '&::after': {
        content: '""',
        backgroundColor: 'currentColor',
        border: '.1em solid currentColor',
      },
    },
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
