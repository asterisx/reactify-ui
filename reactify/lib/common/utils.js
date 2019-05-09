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
