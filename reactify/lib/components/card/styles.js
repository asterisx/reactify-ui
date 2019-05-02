import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: '0.1em',
    width: '20em',
  },
  shadowed: {
    boxShadow: '0px 0px 5px 0px #888888',
  },
  header: {
    display: 'inline',
  },
  body: {
    margin: '1em',
  },
  footer: {
    margin: '1em',
  },
  bordered: {
    borderTop: '1px solid darkgray',
    paddingTop: '0.8em',
  },
  sizes: {
    small: {
      width: '10em',
    },
    medium: {
      width: '15em',
    },
    large: {
      width: '20em',
    },
  },

  getWidthStyle: ({
    small,
    medium,
    large,
    defaultSize = 'medium',
  }) => {
    const sizeObject = { small, medium, large };
    delete sizeObject[defaultSize];
    return Object.entries(sizeObject).reduce(
      (sizeStyle, [key, isTrue]) => (
        isTrue ? styles.sizes[key] : sizeStyle
      ), styles.sizes[defaultSize],
    );
  },
  getDisabledStyle: commonStyles.get.disabled.style,
};
