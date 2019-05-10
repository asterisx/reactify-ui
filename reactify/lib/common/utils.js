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

export const getTImeFromMillis = (millis) => {

  let delta = Math.abs(millis) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = delta % 60;

  return { days, hours, minutes, seconds };
}

