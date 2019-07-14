import { darken } from 'polished';
import {
  commonStyles,
} from '../../common';

export const styles = {
  linkStyle: ({
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
    textDecoration: 'none',
    cursor: 'pointer',
    '@media (hover: hover)': {
      ':hover': {
        color: darken(0.2, commonStyles.get.theme.color({
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
        textDecoration: 'underline',
      },
    },
  }),

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
