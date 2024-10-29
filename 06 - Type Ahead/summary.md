# Summary

## JS
- Regex
    ```js
    const wordToMarch = 'word';
    const regex = new RegExp(wordToMatch, 'gi');
    const content = 'long content word';
    const matched = content.match(regex);

    const changedContent = content.replace(regex, (match) => `<b>${match}</b>`);

    const numStr = '1234567';
    const numArr = numStr.match(/.{1,3}/g);
    ```
    - 'i' in RegExp to ignore case.
    - 'g' in RegExp to find all matches.
    - '.' in RegExp to represent any char.
    - '{1,3}' in RegExp to combine '.' means matching 1 to 3 times.

- `...` unpack operation
    ```js
    const array1 = [1, 2, 3];
    const array2 = [];
    array2.push(...array1);
    ```

## CSS
- `transform: perspective(100px) rotateX(3deg);` to simulate 3D perspective.
- `background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);` changes background color linearly.
- `li { list-style: none; }`
- `z-index: 2` to cover component with z-index value less than 2.
- `box-sizing: border-box;` makes hight, width contain padding and border.
- `text-transform: capitalize;`
- `display: flex; justify-content: space-between;`