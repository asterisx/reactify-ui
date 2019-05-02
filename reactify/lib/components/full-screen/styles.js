import { defaultThemeColors, commonStyles, libraryName } from '../../common';

const componentName = 'full-screen';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
};

const allSpace = {
  left: '0 !important',
  top: '0 !important',
  right: '0 !important',
  bottom: '0 !important',
  zIndex: '1000 !important',
  width: '100% !important',
  height: '100% !important',
};
export const styles = {
  container: {
    position: 'relative',
    background: 'white',
    border: '0',
    padding: '0',
  },
  icon: {
    position: 'absolute',
    display: 'inline',
    color: defaultThemeColors.dark.color,
    top: '0px',
    right: '0px',
  },
  expanded: Object.assign(
    { position: 'fixed' },
    { ...allSpace },
  ),

  getDisabledStyle: commonStyles.get.disabled.style,
};
