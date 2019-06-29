import {
  commonStyles,
  libraryName,
} from '../../../../common';

const componentName = 'tree-view-item';

export const BEMClassNames = {
  container: `${libraryName}-${componentName}__container`,
};

export const styles = {
  item: {
    display: 'inline-flex',
    margin: 0,
    position: 'relative',
    whiteSpace: 'nowrap',
    padding: '0 0 0.2em 0',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  positionLeft: {
    position: 'relative',
    left: '0.8em',
  },
  icon: {
    cursor: 'pointer',
  },
  dflexCenter: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  placeHolder: {
    minHeight: '1em',
    minWidth: '1em',
  },

  getIconThemedStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
