import React from 'react';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';
import { styles } from './styles';

const TopBar = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  small,
  medium,
  large,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.container,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getFontColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
      styles.getBackgroundColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
    ]}
    {...otherProps}
  >
    {React.Children.map(children, (child) => {
      if (child.type === TopBar.Logo || child.type === TopBar.Body || child.type === TopBar.Menu) {
        return React.cloneElement(child, {
          primary: child.props.primary || primary,
          secondary: child.props.secondary || secondary,
          dark: child.props.dark || dark,
          light: child.props.light || light,
          info: child.props.info || info,
          warning: child.props.warning || warning,
          danger: child.props.danger || danger,
          success: child.props.success || success,
          theme: child.props.theme || theme,
          small: child.props.small || small,
          medium: child.props.medium || medium,
          large: child.props.large || large,
        });
      }
      return child;
    })}
  </div>
);

TopBar.Logo = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  small,
  medium,
  large,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getFontColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
      styles.getBackgroundColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

TopBar.Body = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  small,
  medium,
  large,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.body,
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getFontColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
      styles.getBackgroundColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

TopBar.Menu = ({
  children,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
  small,
  medium,
  large,
  theme,
  ...otherProps
}) => (
  <div
    css={[
      styles.getFontSizeStyle({
        small,
        medium,
        large,
      }),
      styles.getFontColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
      styles.getBackgroundColorStyle({
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
      }),
    ]}
    {...otherProps}
  >
    {children}
  </div>
);

TopBar.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

TopBar.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

TopBar.Logo.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

TopBar.Logo.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};


TopBar.Body.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

TopBar.Body.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};

TopBar.Menu.propTypes = {
  /**
   * A collection of valid theme types, all boolean values
   */
  ...themePropTypes,
  /**
   * A collection of valid size types, all boolean values
   */
  ...sizePropTypes,
};

TopBar.Menu.defaultProps = {
  ...defaultThemePropTypes,
  ...defaultSizePropTypes,
};


export default TopBar;
