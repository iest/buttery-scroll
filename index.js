'use strict';

function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t * t + b;
  }
  return c / 2 * ((t -= 2) * t * t + 2) + b;
}

function ButteryScroll(scrollable, distance, duration) {

  var startTime;
  var startPos = scrollable.scrollTop;
  var maxScroll = scrollable.scrollHeight - scrollable.offsetHeight;
  var scrollEndValue = startPos + distance < maxScroll ? distance : maxScroll - startPos;

  function scroll(timestamp) {
    startTime = startTime || timestamp;
    var elapsed = timestamp - startTime;
    var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
    scrollable.scrollTop = progress;

    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    }
  }
  requestAnimationFrame(scroll);
}

module.exports = ButteryScroll;
