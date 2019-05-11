import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
  },
  seperator: {
    alignSelf: 'center',
    fontSize: '2em',
    margin: '0px 0px',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.ofTheme,
};
