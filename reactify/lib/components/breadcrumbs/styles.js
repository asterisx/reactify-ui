import { commonStyles } from '../../common';

export const styles = {
  list: {
    listStyleType: 'none',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 0,

    '> li': {
      float: 'left',
      paddingLeft: '2px',
      paddingRight: '2px',
      display: 'inline-flex',
      alignContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
