import { libraryName } from '../../../../common';

const componentName = 'sub-sidebar';

export const BEMClassNames = {
  container: `${libraryName}-${componentName}__container`,
};

export const styles = {
  container: {
    background: 'inherit',
    cursor: 'pointer',
  },

  headerStyle: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    borderBottom: '2px solid currentColor',
    padding: '0.3em 0.4em',
    marginBottom: '0.4em',
    width: '100%',
    fontSize: '1.2em',
  },

  positionFull: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  w100: {
    width: '100%',
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    border: '2px',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'inherit',
  },

  positionLeft: {
    position: 'relative',
    left: '0.8em',
  },
};
