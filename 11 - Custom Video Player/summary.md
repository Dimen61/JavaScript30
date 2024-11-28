# Summary
## JS
- JS dynamic method call
  ```js
  const method = video.paused ? 'play' : 'pause';
  video[method](); // JS dynamic method call
  ```
- Events relative to mouse: *click*, *mousedown*, *mousemove*, *mouseup*
- Events relative to video player: *play*, *pause* 
- Properties relative to video player:
  - `video.paused`
  - `video.currentTime`
- Get the dataset value defined in attributes
    ```js
    button.dataset.skip
    ```

    ```html
    <button data-skip="-10" class="player__button">« 10s</button>
    ```

## CSS
- Flex
  ```css
  {
    flex-basis: 50%; /* Set the initial relative content length based on the parent element */
  }
  ```
- 