const disabled = {
  cursor: 'not-allowed',
  pointerEvents: 'none',
  opacity: '0.6 !important',
  '&:hover': {
    pointerEvents: ' none !important',
  },
};

const hidden = {
  display: 'none !important',
};

export const commonStyles = {
  disabled,
  hidden,
};
