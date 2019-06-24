import { commonStyles } from '../../../../common';

export const styles = {
  item: {
    display: 'inline-flex',
    margin: 0,
    whiteSpace: 'nowrap',
    padding: '0 0 0.2em 0',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'inherit',
  },

  dflexCenter: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  positionRelative: {
    position: 'relative',
  },

  w100: {
    width: '100%',
  },

  dot: {
    margin: '0.1em 0.2em',
    width: '0.5em',
    height: '0.5em',
  },

  placeHolder: {
    minWidth: '0.9em',
    minHeight: '0.7em',
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
