import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-flex',
    borderRadius: '0.1em',
    height: '10em',
  },
  shadowed: {
    boxShadow: '0px 0px 5px 0px #888888',
  },
  body: {
    margin: '1em',
  },
  footer: {
    margin: '1em',
  },
  bordered: {
    borderLeft: '1px solid darkgray',
    paddingLeft: '0.8em',
  },
  sizes: {
    small: {
      height: '10em',
    },
    medium: {
      height: '15em',
    },
    large: {
      height: '20em',
    },
  },

  getHeightStyle: ({
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
