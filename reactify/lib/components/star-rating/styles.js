import { commonStyles, libraryName } from '../../common';

const componentName = 'star-rating';

export const BEMClassNames = {
  star: `${libraryName}-${componentName}__star`,
};

export const styles = {
  container: {
    display: 'inline-flex',
    alignContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  star: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: '1',
    color: '#ABABAB',
    transition: 'color .2s ease-out',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
  starSelected: {
    color: 'currentColor',
  },

  getFontSizeStyle: commonStyles.get.font.size,

  getFontColorStyle: commonStyles.get.font.color.ofTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
