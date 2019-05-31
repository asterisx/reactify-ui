export const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export function Timer(callback, delay) {
  let timerId = delay;
  let start = delay;
  let remaining = delay;

  this.clear = () => {
    clearTimeout(timerId);
  };

  this.pause = () => {
    clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = () => {
    start = Date.now();
    clearTimeout(timerId);
    timerId = setTimeout(callback, remaining);
  };

  this.resume();
}

export const getTimeFromMillis = (millis) => {
  let delta = Math.abs(millis) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = delta % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const areArraysDifferent = (items1, items2, fields) => {
  if (!Array.isArray(items1) || !Array.isArray(items2)) {
    return false;
  }
  if (items1.length !== items2.length) {
    return false;
  }
  return items1.every(
    item1 => items2.find(item2 => fields.every(field => item1[field] === item2[field])),
  );
};

export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

export const reconcileThemeProps = ({
  props,
  primary,
  secondary,
  dark,
  light,
  info,
  warning,
  danger,
  success,
}) => {
  const themeprops = {
    primary: false,
    secondary: false,
    dark: false,
    light: false,
    info: false,
    warning: false,
    danger: false,
    success: false,
  };

  if (props.secondary) {
    themeprops.secondary = true;
    return themeprops;
  }

  if (props.dark) {
    themeprops.dark = true;
    return themeprops;
  }

  if (props.light) {
    themeprops.light = true;
    return themeprops;
  }

  if (props.info) {
    themeprops.info = true;
    return themeprops;
  }

  if (props.warning) {
    themeprops.warning = true;
    return themeprops;
  }

  if (props.danger) {
    themeprops.danger = true;
    return themeprops;
  }

  if (props.success) {
    themeprops.success = true;
    return themeprops;
  }

  if (secondary) {
    themeprops.secondary = true;
    return themeprops;
  }

  if (dark) {
    themeprops.dark = true;
    return themeprops;
  }

  if (light) {
    themeprops.light = true;
    return themeprops;
  }

  if (info) {
    themeprops.info = true;
    return themeprops;
  }

  if (warning) {
    themeprops.warning = true;
    return themeprops;
  }

  if (danger) {
    themeprops.danger = true;
    return themeprops;
  }

  if (success) {
    themeprops.success = true;
    return themeprops;
  }

  if (props.primary) {
    themeprops.primary = true;
    return themeprops;
  }

  if (primary) {
    themeprops.primary = true;
    return themeprops;
  }

  return themeprops;
};

const getDocDimensions = () => {
  const doc = document.documentElement;
  return { height: doc.scrollHeight, width: doc.scrollWidth };
};

export const isWithinWindow = (x, y, width, height) => {
  if (x < 0 || y < 0) return false;
  const { height: docHeight, width: docWidth } = getDocDimensions();

  if (x + width > docWidth) return false;

  if (y + height > docHeight) return false;

  return true;
};
