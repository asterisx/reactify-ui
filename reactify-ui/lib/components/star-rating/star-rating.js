import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import merge from 'lodash/merge';
import { styles, BEMClassNames } from './styles';
import {
  themePropTypes,
  defaultThemePropTypes,
  sizePropTypes,
  defaultSizePropTypes,
} from '../../common';

class StarRating extends Component {
    static propTypes = {
      /**
       * If 'true', component is disabled
       * Default is 'false'
       */
      disabled: PropTypes.bool,
      /**
       * The no of stars
       */
      highestRating: PropTypes.number,
      /**
       * The current rating
       */
      rating: PropTypes.number,
      /**
       * A collection of valid theme types, all boolean values
       */
      ...themePropTypes,
      /**
       * A collection of valid size types, all boolean values
       */
      ...sizePropTypes,
      /**
       * Callback fired when the state is changed.
       *
       * @param {number} `rating` The new rating.
       */
      onChange: PropTypes.func,
    };

    static defaultProps = {
      disabled: false,
      highestRating: 5,
      rating: 0,
      ...defaultSizePropTypes,
      ...defaultThemePropTypes,
      onChange: () => {},
    };

    state = { rating: this.props.rating, prevRating: null };

    setRating = rating => this.setState({
      rating,
      prevRating: rating,
    }, this.props.onChange(rating));

    starOver = (rating) => {
      this.setState(prevState => ({
        rating,
        prevRating: prevState.rating,
      }));
    }

    starOut = () => {
      this.setState(prevState => ({ rating: prevState.prevRating }));
    }

    getStars = (highestRating) => {
      const stars = [];

      for (let i = 1; i <= highestRating; i += 1) {
        const starStyles = [];
        starStyles.push(styles.star);

        if (this.state.rating >= i) {
          starStyles.push(styles.starSelected);
        }

        stars.push(
          <label
            key={i}
            css={starStyles}
            onClick={() => this.setRating(i)}
            onMouseOver={() => this.starOver(i)}
            onMouseOut={() => this.starOut(i)}
            onFocus={() => this.starOver(i)}
            onBlur={() => this.starOut(i)}
            className={BEMClassNames.star}
          >
            ★
          </label>,
        );
      }
      return stars;
    }

    render() {
      const {
        highestRating,
        primary,
        secondary,
        dark,
        light,
        info,
        warning,
        danger,
        success,
        theme,
        small,
        medium,
        large,
        disabled,
        ...otherProps
      } = this.props;
      return (
        <span
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
              theme: merge(defaultThemePropTypes.theme, theme),
            }),
            styles.getDisabledStyle({
              disabled,
            }),
          ]}
          {...otherProps}
        >
          {this.getStars(highestRating)}
        </span>
      );
    }
}

export default withTheme(StarRating);
