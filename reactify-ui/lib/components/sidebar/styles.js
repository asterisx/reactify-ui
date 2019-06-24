import { commonStyles } from '../../common';

export const styles = {
  overflowAuto: {
    overflow: 'auto',
  },

  positionRelative: {
    position: 'relative',
  },

  container: {
    userSelect: 'none',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getBackgroundColorStyle: commonStyles.get.backgroundColor.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
