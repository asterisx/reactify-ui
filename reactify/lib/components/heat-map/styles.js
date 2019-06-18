import { parseToRgb } from 'polished';
import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.8em',
  },
  noPointerEvents: {
    pointerEvents: 'none',
  },
  cell: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '2px',
    cursor: 'pointer',
  },
  row: {
    flex: 1,
    display: 'flex',
  },

  getBackgroundColor: ({
    baseColor,
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
    opacity,
  }) => {
    const color = baseColor || commonStyles.get.theme.color({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    });
    const colorAsRgb = parseToRgb(color);
    return `rgba(${colorAsRgb.red}, ${colorAsRgb.green}, ${colorAsRgb.blue}, ${opacity})`;
  },
};
