import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline',
    borderRadius: '0.2em',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getThemeBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
