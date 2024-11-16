# Summary

## JS
- some location properties
  ```js
  // Get the position of the event
  let { offsetX: x, offsetY: y } = event;

  // Get the size of DOM
  const { offsetWidth: width, offsetHeight: height } = aDom;

  // Get the position of a DOM
  aDom.offsetLeft;
  aDom.offsetTop;
  ```

## CSS
- Set the text shadow
  ```css
  {
    text-shadow: horizontal-offset vertical-offset blur-radius shadow color
  }
  ```
  - horizontal-offset: 10px
  - vertical-offset: 10px
  - blur-radius: 1px
  - shadow-color: rgba(0,0,0,1)