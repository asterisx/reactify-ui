import { commonStyles, libraryName } from '../../common';

const componentName = 'checkbox';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
    outline: 'none',
  },
  icon: {
    userSelect: 'none',
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
  },

  reactIcon: commonStyles.reactIconStyle,

  getFontSizeStyle: commonStyles.get.font.size,

  getThemedFontStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
