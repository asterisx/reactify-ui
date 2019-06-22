import { keyframes } from '@emotion/core';
import { commonStyles, libraryName } from '../../common';

const componentName = 'progress-bar';

export const BEMClassNames = {
  progress: `${libraryName}-${componentName}__progress`,
};

const progressBarStripes = keyframes`
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
`;

export const styles = {
  progressContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: '3px',
    animationDuration: '1s',
  },
  striped: {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
    backgroundSize: '40px 40px',
  },
  getWidth: ({ percentage }) => ({
    width: `${percentage}%`,
  }),
  progress: {
    animationDuration: 'inherit !important',
    transitionDuration: 'inherit',
  },
  animation: {
    animation: `${progressBarStripes} linear infinite`,
  },
  textLeft: {
    textAlign: 'left',
    marginLeft: '10px',
  },
  textRight: {
    textAlign: 'right',
    marginRight: '10px',
  },
  textCenter: {
    textAlign: 'center',
  },
  text: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  getBackgroundStyle: commonStyles.get.backgroundColor.forTheme,

  getFontColorStyle: commonStyles.get.font.color.forTheme,

  getFontSizeStyle: commonStyles.get.font.size,
};
