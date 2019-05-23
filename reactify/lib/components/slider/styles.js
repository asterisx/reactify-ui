import { commonStyles } from '../../common';

const commonPseudo = {
  backgroundColor: '#fcfcfc',
  height: '1.5em',
  width: '1.5em',
  borderRadius: '50%',
  appearance: 'none',
};

export const styles = {
  input: {
    background: '#ABABAB',
    borderRadius: '8px',
    height: '0.8em',
    width: '100%',
    outline: 'none',
    transition: 'background 450ms ease-in',
    appearance: 'none',
    cursor: 'pointer',
    '::-webkit-slider-thumb': { ...commonPseudo },
    '::-moz-range-thumb': { ...commonPseudo },
    '::-ms-thumb': { ...commonPseudo },
  },
  getBackgroundfillStyle: ({
    primary,
    secondary,
    dark,
    light,
    info,
    warning,
    danger,
    success,
    theme,
    fillColor,
    value,
    min,
    max,
    minAllowed,
  }) => {
    const bgColor = fillColor || commonStyles.get.theme.color({
      primary,
      secondary,
      dark,
      light,
      info,
      warning,
      danger,
      success,
      theme,
    });
    const minPercentage = ((minAllowed - min) / (max - min)) * 100;
    const currentValue = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, 
        #ABABAB 0%, #ABABAB ${minPercentage}%, 
        ${bgColor} ${minPercentage}%, ${bgColor} ${currentValue}%,
        #ABABAB ${currentValue}%, #ABABAB 100%`;
  },
  getDisabledStyle: commonStyles.get.disabled.style,

  getFontSizeStyle: commonStyles.get.font.size,
};
