import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-flex',
    border: '1px solid lightgray',
    padding: '0px 6px',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    border: 0,
    outline: 'none',
    color: 'gray',
    padding: '4px',
  },
  hidden: {
    visibility: 'hidden',
  },

  getFontColorStyle: commonStyles.get.font.color.ofTheme,

  getFontSizeStyle: commonStyles.get.font.size,

  getDisabledStyle: commonStyles.get.disabled.style,
};
