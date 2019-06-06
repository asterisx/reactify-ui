export const styles = {
  sub: {
    position: 'absolute',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  position: ({ left, top }) => ({
    left: left !== 0 ? `${left}px !important` : undefined,
    top: top !== 0 ? `${top}px !important` : undefined,
  }),
};
