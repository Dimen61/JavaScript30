# Summary

## JS

- Chrome dev tool
    - console.log()
    ```js
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', 'strong');

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
    ```
    - console.warm()
    - console.error()
    - console.info()
    - console.assert()
    - view DOM elements
    ```js
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    console.clear();
    ```
    - Console grouping info
    ```js
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
        })
    ```
    - Console timing
    ```js
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data'); // Use the same string as tag
        console.log(data);
      });
    ```