import { commonStyles } from '../../common';


export const styles = {
  container: ({ noShadow }) => ({
    display: 'inline-block',
    boxShadow: noShadow ? undefined : '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  }),

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getBackgroundColorStyle: commonStyles.get.backgroundColor.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
