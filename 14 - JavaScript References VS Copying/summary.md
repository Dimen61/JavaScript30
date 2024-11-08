# Summary

## JS
- Shadow copy of array
    ```js
    const items = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const items2 = items.slice()
    const items3 = [].concat(items);
    const items4 = Array.from(items);
    ```
- Shadow copy of object
  ```js
  const obj = {
      name: 'wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
  };

  const obj2 = Object.assign({}, obj);
  ```
- Deep copy of object
  ```js
  const obj = {
      name: 'wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
  };

  const obj2 = JSON.parse(JSON.stringify(obj));
  ```