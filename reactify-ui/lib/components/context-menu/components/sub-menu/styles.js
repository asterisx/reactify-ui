export const styles = {
  sub: {
    position: 'absolute',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    border: '2px',
    zIndex: '1',
    cursor: 'pointer',
  },
  position: ({ left, top }) => ({
    marginLeft: left !== 0 ? `${left}px !important` : undefined,
    marginTop: top !== 0 ? `${top}px !important` : undefined,
  }),
};
