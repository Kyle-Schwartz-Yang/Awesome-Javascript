<details>
   
  <summary> 
    <b> 
      💡 Цікавий факт `JavaScript` : 
    </b>
  </summary>
<br>

- <mark>`typeof null` повертає `object`  - Історична помилка у JavaScript. 💡</mark>
 ```javascript
console.log(typeof null) // return: object 
  ```
- `NaN` ( Not-a-Number ) не дорівнює самому собі: - Для точності використовуємо `Number.isNaN(value)` 👍
 ```javascript
console.log(NaN === NaN);  //return:  false
console.log(Number.isNaN(NaN));  //return:  true 
  ```
- `0.1` + `0.2` не равно `0.3` 🚫
 ```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false
  ```
- Строки и массивы в `JavaScript` — это объекты. Строки являются примитивами, но они ведут себя как объекты. Массивы - это объекты с дополнительными свойствами и методами для взаимодействия с коллекциями  💣
 ```javascript
let str = "hello";
console.log(typeof str);  // "string"
console.log(str.length);  // 5 (доступ к свойству как у объекта)

let arr = [1, 2, 3];
console.log(typeof arr);  // "object"
console.log(Array.isArray(arr));  // true
  ```
- Строки в `JavaScript` неизменяемы 💡 — Любая операция, которая кажется изменяющей строку, на самом деле создает новую строку.
 ```javascript
let str = "Hello";
str = str + " World";  // Создается новая строка "Hello World"
 ```
- `undefined` и `null` не равны 🚫
 ```javascript
console.log(undefined == null);  // true (сравнение с приведением типов)
console.log(undefined === null); // false (строгое сравнение)
 ```
- `0 == -0` возвращает `true` 🔄
 ```javascript
console.log(0 == -0);  // true (сравнение с приведением типов)
 ```
  
  
<br>
</details>
