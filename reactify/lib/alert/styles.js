import { css } from '@emotion/core';
import { defaultThemeColors } from '../../common';
import { commonStyles } from '../../common/styles';

export const styles = {
  container: {
    padding: '0.4em 0.6em',
    border: '1px solid',
  },
  borderLeft: {
    borderLeft: '0.4em solid',
  },
  borderTop: {
    borderTop: '0.4em solid',
  },
  borderRight: {
    borderRight: '0.4em solid',
  },
  borderBottom: {
    borderBottom: '0.4em solid',
  },
  getPropBasedStyles: ({
    disabled,
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme = defaultThemeColors,
  }) => css`
  ${borderLeft ? styles.borderLeft : undefined};
  ${borderRight ? styles.borderRight : undefined};
  ${borderTop ? styles.borderTop : undefined};
  ${borderBottom ? styles.borderBottom : undefined};
  border-color: ${primary ? theme.primary : undefined};
  border-color: ${secondary ? theme.secondary : undefined};
  border-color: ${dark ? theme.dark : undefined};
  border-color: ${light ? theme.light : undefined};
  border-color: ${info ? theme.info : undefined};
  border-color: ${warning ? theme.warning : undefined};
  border-color: ${danger ? theme.danger : undefined};
  border-color: ${success ? theme.success : undefined};
  ${disabled ? commonStyles.disabled : undefined}
`,
};
