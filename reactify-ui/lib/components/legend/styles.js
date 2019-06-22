import { commonStyles, libraryName } from '../../common';

const componentName = {
  legendItem: 'legend-item',
};

export const BEMClassNames = {
  legendItem: {
    icon: `${libraryName}-${componentName.legendItem}__icon`,
  },
};

export const styles = {
  container: {
    vertical: {
      display: 'inline-flex',
      fontSize: '0.7em',
      flexDirection: 'column',
    },
    horizontal: {
      display: 'inline-flex',
      fontSize: '0.7em',
      flexDirection: 'row',
    },
  },

  item: {
    container: {
      display: 'inline-flex',
      alignItems: 'center',
      alignContent: 'center',
      marginRight: '0.3em',
    },
    icon: {
      display: 'inline-block',
      width: '0.7em',
      height: '0.7em',
      border: '1px solid #000',
      opacity: '.8',
      marginRight: '0.3em',
    },
    getThemeBackgroundStyle: commonStyles.get.backgroundColor.forTheme,
  },
};
