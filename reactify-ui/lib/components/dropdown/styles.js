import { libraryName, commonStyles } from '../../common';

const componentName = 'dropdown';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};

export const styles = {
  container: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  absolute: {
    position: 'absolute',
    width: 'auto',
    zIndex: 1,
    ...commonStyles.zdIndex.z1000,
    ':focus': {
      outline: 0,
    },
  },
  listPanel: {
    width: '100%',
  },
  hiddenFixed: {
    position: 'fixed',
    zIndex: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
