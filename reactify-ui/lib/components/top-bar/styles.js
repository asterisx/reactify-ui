import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'flex',
  },
  body: {
    flexGrow: 1,
  },
  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getBackgroundColorStyle: commonStyles.get.backgroundColor.forTheme,
};
