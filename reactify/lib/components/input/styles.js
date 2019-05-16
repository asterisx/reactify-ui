import { darken } from 'polished';
import { commonStyles } from '../../common';

export const styles = {

  inputStyle: ({
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

    return ({
      textDecoration: 'none',
      cursor: 'pointer',
      border: 0,
      borderBottom: '2px solid',
      borderColor: themeColor,
      padding: '0px 4px',
      outline: 0,
      ':hover': {
        borderColor: darken(0.2, themeColor),
      },
    });
  },

  getFontSizeStyle: commonStyles.get.font.size,
};
