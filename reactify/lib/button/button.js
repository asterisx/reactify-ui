import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { FaCircleNotch } from 'react-icons/fa';

const defaultFontSizes = size => ['small', 'medium', 'large'].find(sz => sz === size);

const Button = ({
  children,
  className,
  size,
  text,
  clear,
  bordered,
  theme,
  color,
  loading,
  loaderPosition,
  disabled,
  ...otherProps
}) => {
  const loader = loaderClass => (
    <span className={`reactify-button__loader__container ${loaderClass}`}>
      <FaCircleNotch className="reactify-button__loader__loader" />
    </span>
  );
  return (
    <div
      className={`reactify-button__container ${
        disabled ? 'reactify--disabled' : ''
      } ${
        clear
          ? `reactify-button--border-clear${`-${theme}`}${
            bordered ? '-bordered' : ''
          }`
          : ''
      }  ${
        theme && !bordered && !clear ? `reactify-button--theme-${theme}` : ''
      } ${className || ''} ${
        defaultFontSizes(size) ? `reactify-button--font-size-${size}` : ''
      }`}
      style={{
        fontSize: !defaultFontSizes(size) ? size : undefined,
        backgroundColor: color,
      }}
      {...otherProps}
    >
      {loading
        && loaderPosition === 'left'
        && loader('reactify-button--margin-right')}
      {text && <span>{text}</span>}
      {loading
        && loaderPosition === 'right'
        && loader('reactify-button--margin-left')}
      {children}
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  clear: PropTypes.bool,
  bordered: PropTypes.bool,
  theme: PropTypes.string,
  color: PropTypes.string,
  loading: PropTypes.bool,
  loaderPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'medium',
  text: undefined,
  clear: false,
  bordered: false,
  theme: 'default',
  color: undefined,
  loading: false,
  disabled: false,
  loaderPosition: 'left',
};

export default Button;
