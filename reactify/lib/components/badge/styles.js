import { commonStyles } from '../../common';

export const styles = {
  container: {
    display: 'inline-block',
    position: 'relative',
  },
  bubble: {
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '100',
    borderRadius: '1em',
    overflow: 'hidden',
    padding: '0.4em',
  },

  position: {
    topLeft: {
      top: '0px',
      left: '0px',
      transform: 'translate(-50%, -50%)',
    },
    topRight: {
      top: '0px',
      right: '0px',
      transform: 'translate(50%, -50%)',
    },
    bottomRight: {
      bottom: '0px',
      right: '0px',
      transform: 'translate(50%, 50%)',
    },
    bottomLeft: {
      bottom: '0px',
      left: '0px',
      transform: 'translate(-50%, 50%)',
    },
  },

  getPositionStyle: ({
    topRight,
    bottomRight,
    bottomLeft,
    topLeft,
  }) => Object.entries({
    topRight,
    bottomRight,
    bottomLeft,
    topLeft,
  }).reduce(
    (positionStyle, [key, isTrue]) => (
      isTrue ? styles.position[key] : positionStyle
    ), {},
  ),

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getFontSizeStyle: commonStyles.get.font.size,

  getThemeBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getDisabledStyle: commonStyles.get.disabled.style,
};
