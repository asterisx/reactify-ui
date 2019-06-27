const defaultValues = {
  bottomMargin: '3.5',
  lineWidth: '2',
  lineColor: 'black',
  itemPadding: '1',
};

export const styles = {
  horizontal: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
    },

    content: {
      marginBottom: `${defaultValues.bottomMargin}em`,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',

      ':last-child::after': {
        display: 'none',
      },

      '::after': {
        position: 'absolute',
        content: "''",
        width: `${defaultValues.lineWidth}px`,
        height: `${defaultValues.bottomMargin / 2}em`,
        bottom: '0',
        left: '50%',
        backgroundColor: `${defaultValues.lineColor}`,
        transform: 'translateY(100%)',
      },
    },

    childContainer: {
      display: 'flex',
      justifyContent: 'center',
    },

    child: {
      padding: `0 ${defaultValues.itemPadding}em`,
      position: 'relative',
      textAlign: 'left',

      ':only-child::after': {
        display: 'none',
      },

      '::before,::after': {
        content: "''",
        position: 'absolute',
        backgroundColor: `${defaultValues.lineColor}`,
        left: '0',
      },

      '::before': {
        left: '50%',
        top: '0',
        transform: 'translateY(-100%)',
        width: `${defaultValues.lineWidth}px`,
        height: `${defaultValues.bottomMargin / 2}em`,
      },

      '::after': {
        top: `${defaultValues.bottomMargin / 2 * -1}em`,
        transform: 'translateY(-100%)',
        height: `${defaultValues.lineWidth}px`,
        width: '100%',
      },

      ':first-child::after': {
        left: '50%',
        width: '50%',
      },

      ':last-child::after': {
        width: `calc(50% + ${defaultValues.lineWidth}px)`,
      },
    },
  },

  vertical: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto',
    },

    content: {
      marginRight: `${defaultValues.bottomMargin}em`,
      marginBottom: 0,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      ':last-child::after': {
        display: 'none',
      },

      '::after': {
        position: 'absolute',
        content: "''",
        height: `${defaultValues.lineWidth}px`,
        width: `${defaultValues.bottomMargin / 2}em`,
        right: 0,
        top: '50%',
        backgroundColor: `${defaultValues.lineColor}`,
        transform: 'translateX(100%)',
      },
    },

    childContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    child: {
      padding: `${defaultValues.itemPadding}em 0`,
      position: 'relative',
      textAlign: 'left',

      ':only-child::after': {
        display: 'none',
      },

      '::before,::after': {
        content: "''",
        position: 'absolute',
        backgroundColor: `${defaultValues.lineColor}`,
        left: '0',
      },

      '::before': {
        top: '50%',
        left: 'inherit',
        transform: 'translateX(-100%)',
        height: `${defaultValues.lineWidth}px`,
        width: `${defaultValues.bottomMargin / 2}em`,
      },

      '::after': {
        top: 0,
        left: `${defaultValues.bottomMargin / 2 * -1}em`,
        transform: 'translateX(-100%)',
        width: `${defaultValues.lineWidth}px`,
        height: '100%',
      },

      ':first-child::after': {
        width: `${defaultValues.lineWidth}px`,
        top: '50%',
        height: '50%',
        left: `${defaultValues.bottomMargin / 2 * -1}em`,
      },

      ':last-child::after': {
        top: 'inherit',
        bottom: `calc(50% - ${defaultValues.lineWidth}px)`,
        height: `calc(50% + ${defaultValues.lineWidth}px)`,
        width: `${defaultValues.lineWidth}px`,
      },
    },
  },
};
