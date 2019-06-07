import { commonStyles } from '../../common';

export const styles = {
  container: {
    position: 'relative',
  },
  position: ({ left, top }) => ({
    left: `${left}px`,
    top: `${top}px`,
  }),

  getFontSizeStyle: commonStyles.get.font.size,
};
