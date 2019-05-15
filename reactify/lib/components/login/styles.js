import { commonStyles } from '../../common';

export const styles = {
  opacity1: {
    opacity: '1 !important',
  },
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    border: 0,
    outlineWidth: 0,
  },
  fieldContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    border: 0,
    borderBottom: '2px solid gray',
    width: '100%',
    display: 'inline-flex',
    marginBottom: '5px',
  },
  error: {
    fontSize: '0.8em',
    color: 'red',
  },

  getDisabledStyle: commonStyles.get.disabled.style,
};
