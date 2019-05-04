import { commonStyles, libraryName } from '../../common';

const componentName = 'modal';

export const BEMClassNames = {
  bg: `${libraryName}-${componentName}__bg`,
  children: `${libraryName}-${componentName}__children`,
};

export const styles = {
  container: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    ...commonStyles.zdIndex.z100000,
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  child: {
    position: 'relative',
    display: 'inline-block',
    overflow: 'auto',
    ...commonStyles.zdIndex.z100001,
  },
  sizes: {
    small: {
      width: '30em',
    },
    medium: {
      width: '50em',
    },
    large: {
      width: '70em',
    },
  },
  getSize: ({
    small,
    medium,
    large,
    width,
    defaultSize = 'medium',
  }) => {
    const sizeObject = { small, medium, large };
    delete sizeObject[defaultSize];
    return Object.entries(sizeObject).reduce(
      (sizeStyle, [key, isTrue]) => (
        isTrue ? styles.sizes[key] : sizeStyle
      ), width ? { width } : styles.sizes[defaultSize],
    );
  },
};
