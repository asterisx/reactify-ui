import { commonStyles, libraryName } from '../../common';

const componentName = 'portal';

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
    position: 'absolute',
    display: 'inline-block',
    overflow: 'auto',
  },
};
