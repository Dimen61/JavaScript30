# Summary

## JS
- Get the current bottom location in Y axis
  ```js
  window.scrollY + window.innerHeight;
  ```
- Get the height of a DOM
  ```js
  image.height
  ```

## CSS
- Simulate slide effect of images in the article: combine transform and float
  ```css
  .align-left {
    float: left;
  }

  .slide-in {
    opacity: 0;
    transition: all .5s;
  }

  .align-left.slide-in {
    transform: translateX(-30%) scale(0.95);
  }
  ```