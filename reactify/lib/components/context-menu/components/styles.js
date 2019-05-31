export const styles = {
  sub: {
    position: 'absolute',
    visibility: 'hidden',
    ':hover > *': {
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
      pointerEvents: 'auto',
    },
  },
  visible: {
    visibility: 'visible',
  },
  position: (left, top) => ({
    top: `${top}px`,
    left: `${left}px`,
  }),
  item: {
    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
};
