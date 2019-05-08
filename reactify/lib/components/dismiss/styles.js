import { commonStyles, libraryName } from '../../common';

const componentName = 'dismiss';

export const BEMClassNames = {
  icon: `${libraryName}-${componentName}__icon`,
  close: `${libraryName}-${componentName}__close`,
  children: `${libraryName}-${componentName}__children`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    padding: '0.4em',
    alignContent: 'center',
    alignItems: 'center',
  },
  children: {
    textAlign: 'justify',
    marginLeft: '0.2em',
    marginRight: '0.2em',
  },
  icon: {
    marginTop: '0.1em',
    fontSize: '1.2em',
    alignSelf: 'flex-start',
    display: 'inline-flex',
    alignItems: 'flex-start',
  },
  close: {
    cursor: 'pointer',
    marginLeft: 'auto',
    marginTop: '0.1em',
    fontSize: '1.2em',
    alignSelf: 'flex-start',
    display: 'inline-flex',
    alignItems: 'flex-start',
  },

  getBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getFontSizeStyle: commonStyles.get.font.size,

  getDisabledStyle: commonStyles.get.disabled.style,
};
