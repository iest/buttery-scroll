# Scroll like butter

## [Demo](http://codepen.io/iest/pen/VYpXJy)

## Usage

Install from npm: `npm install buttery-scroll`

Call as a function:

`ButteryScroll(scrollableElement, distance, duration)`

- `scrollableElement`: any element that can scroll, e.g. `document.body`
- `distance`: a distance in pixels, a positive or negative value
- `duration`: how long the scroll should take, in milliseconds

### Example usage:

```js
ButteryScroll(document.querySelector('body'), 300, 900);
```

_This is essentially a heavy fork of [Benjamin De Cock](https://twitter.com/bdc)'s sweet [Anchor scrolling library](https://github.com/bendc/anchor-scroll). Thanks Benjamin!_.
