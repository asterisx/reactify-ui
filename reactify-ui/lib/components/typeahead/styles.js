import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-block',
    position: 'relative',
  },
  suggestionList: {
    position: 'absolute',
    display: 'block',
    left: 0,
    right: 0,
    ...commonStyles.zdIndex.z10000,
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
