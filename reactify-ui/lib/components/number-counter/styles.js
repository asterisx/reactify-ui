import { commonStyles, libraryName } from '../../common';

const componentName = 'number-counter';

export const BEMClassNames = {
  ticker: `${libraryName}-${componentName}__ticker`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
