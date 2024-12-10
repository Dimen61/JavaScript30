# Summary

## CSS
- The basic idea to cutomize the basic tools offered by language like checkbox is to implement by yourself.
- Use `flex` to make content center.
  ```css
  {
    display: flex;
    justify-content: center; // horizontally
    align-items: center;     // vertically
  }
  ```
- Use `fill` to change the shape or font color. 
  ```css
  {
    fill: white;
  }
  ```
- Use `border-radius: 50%` to change the box into circle.
- Use `text-align: center` to centerlize the text.
- Use `:before` to add the virtual first child for the target object.

## JS
- **Event delegation** is listening the parent node instead of listening every children nodes.
- **Local storage** is key-value data structure holded by the browser. Key and value need to be string type.
  ```js
  localStorage.getItem('keyName');
  localStorage.setItem('keyName', JSON.stringify(value));
  ```