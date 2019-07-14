import { darken } from 'polished';
import {
  commonStyles,
} from '../../common';

export const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    display: 'inline-flex',
    flexDirection: 'row',
    border: 'none',
    height: '2.25em',
    outline: 'none',
    padding: '0',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    borderRadius: '1.2em',
    verticalAlign: 'middle',
    textDecoration: 'none',
    justifyContent: 'center',
    margin: '2px',
  },
  content: {
    cursor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    paddingLeft: '.75em',
    paddingRight: '.75em',
    textOverflow: 'ellipsis',
  },
  svg: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
  }) => {
    const fontColor = commonStyles.get.font.color.forTheme({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    }).color;
    return ({
      color: darken(0.1, fontColor),
      cursor: 'pointer',
      margin: '0px -8px 0px 4px',
      fill: 'currentColor',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fontSize: '1.5em',
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      userSelect: 'none',
      flexShrink: 0,
      '@media (hover: hover)': {
        ':hover': {
          color: darken(0.2, fontColor),
        },
      },
    });
  },
  getBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getFontSizeStyle: commonStyles.get.font.size,

  getDisabledStyle: commonStyles.get.disabled.style,
};
