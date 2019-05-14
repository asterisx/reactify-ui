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
    ...commonStyles.zdIndex.z1000,
    ':focus': {
      outline: 0,
    },
  },
  listPanel: {
    width: '100%',
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
