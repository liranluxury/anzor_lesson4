"use strict";
// 1. Карта и фильтр:

// Вход: Массив чисел: [1, 2, 3, 4, 5, 6]

// Ожидаемый результат: Новый массив, содержащий только четные числа: [2, 4, 6]
const arr = [1, 2, 3, 4, 5, 6];
function evenNumber(arr) {
  let evenArr = [...arr];
  evenArr = arr.filter((i) => i % 2 === 0);
  return evenArr;
}
console.log(evenNumber(arr));
// Манипуляция объектами:

// 2)
// Вход: Объект:
const obj = {
  name: "Alice Smith",
  age: 30,
  city: "New York",
};

function keyUp(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key.toUpperCase()] = obj[key];
  }
  return newObj;
}
console.log(keyUp(obj));
// Ожидаемый результат: Новый объект со всеми ключами, преобразованными в верхний регистр:

// const newObj = {
//   NAME: "Alice Smith",
//   AGE: 30,
//   CITY: "New York"
// };

// Задание 3: Создайте функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки длиной более 5 символов.

// Вход: Массив строк: ["apple", "banana", "orange", "grape", "mango"]
const fruits = ["apple", "banana", "orange", "grape", "mango"];
function moreFife(arr) {
  let newFruits = [];
  arr.forEach((i) => {
    if (i.length > 5) {
      newFruits.push(i);
    }
  });
  return newFruits;
}
console.log(moreFife(fruits));
// Ожидаемый результат: Новый массив, содержащий строки длиной более 5 символов: ["orange", "orange"]

// 4. Задание: Напишите функцию, которая принимает число и возвращает его модуль.

// Вход: Число: -5
function modul(num) {
  return Math.abs(num);
}
console.log(modul(-115));
// Ожидаемый результат: Модуль числа: 5 (may use Math.abs)

// 5. Задание: Создайте функцию, которая принимает строку и преобразует каждое слово в заглавные буквы.

// Вход: Строка: "hello world"
function upStr(str) {
  let arr = str.split(" ");
  arr.forEach((word, index) => {
    arr[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return arr.join(" ");
}
console.log(upStr("hELlo woRLd"));
// Ожидаемый результат: Строка в заглавном регистре: "Hello World"

//  Задание 6: Создайте функцию, которая принимает массив чисел и возвращает среднее значение чисел.
function averageSum(arr) {
  let sumPrev = arr.reduce((sum, item) => sum + item, 0);
  return sumPrev / arr.length;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(averageSum(arr1));
// Вход: Массив чисел: [1, 2, 3, 4, 5]

// Ожидаемый результат: Среднее значение чисел: 3

// Задание 7: Напишите функцию, которая принимает две строки и проверяет, равны ли они, без учета регистра.

// Вход: Две строки с разным регистром: "Hello" и"hello"`
function isSame(str1, str2) {
  let one = str1.toLowerCase();
  let two = str2.toLowerCase();
  return one === two;
}
console.log(isSame("Hello", "hello"));

// Ожидаемый результат: true, поскольку строки равны при игнорировании регистра

// Задание 8: Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, начинающиеся с гласной буквы.
function onlyVowel(arr) {
  let newArr = [];
  arr.forEach((i) => {
    if (
      i[0] === "a" ||
      i[0] === "u" ||
      i[0] === "e" ||
      i[0] === "o" ||
      i[0] === "i"
    ) {
      newArr.push(i);
    }
  });
  return newArr;
}
const arr2 = ["apple", "banana", "orange", "grape", "mango"];
console.log(onlyVowel(arr2));
// Вход: Массив строк: ["apple", "banana", "orange", "grape", "mango"]

// Ожидаемый результат: Новый массив, содержащий строки, начинающиеся с гласной буквы: ["apple", "orange"]

// Задание 9: Создайте функцию, которая принимает строку и возвращает частоту вхождения каждого символа в строке.
function numberOfLetters(str) {
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const lett = str[i];
    if (letters[lett]) {
      letters[lett]++;
    } else {
      letters[lett] = 1;
    }
  }
  return letters; //не сама решила трудно было
}
console.log(numberOfLetters("Mississippi"));

// Вход: Строка: "Mississippi"
// Ожидаемый результат:

// m: 1
// i: 4
// s: 2
// p: 2

// 10. Задание: Напишите функцию, которая принимает две строки и проверяет, являются ли они анаграммами.

// Вход: Две строки: "listen" и"silent"`
function anagramma(str1, str2) {
  let arr1 = str1.split("").sort().join("");
  let arr2 = str2.split("").sort().join("");

  return arr1 === arr2;
}
console.log(anagramma("silent", "listen"));
// Ожидаемый результат: true, поскольку "listen" и "silent" являются анаграммами

// Задание 11: Создайте элемент div и добавьте к нему обработчик события keydown, который выводит в консоль нажатую клавишу.

// Вход: Элемент div с идентификатором myDiv
const myDiv = document.getElementById("myDiv");
function showKey(div) {
  div.addEventListener("keydown", function (event) {
    console.log(event.code);
    console.log(event.key);
  });
}
showKey(myDiv);
// Ожидаемый результат: При нажатии любой клавиши на элементе div в консоль должна выводиться нажатая клавиша.

//  Задание 12: Создайте элемент div и с помощью функции innerHTML вставьте в него текст "Hello, world!".
const block1 = document.querySelector(".block1");
const h2 = document.querySelector(".h2");
h2.innerHTML = "Hello, world!"; //а если у меня есть несколько дивов и надо только в этом поменять, как делать?

// Ожидаемый результат: В элементе div должен отображаться текст "Hello, world!".

/* 12)Автозаполнение поля:
Создайте поле ввода (например, для города).
Напишите функцию, которая автоматически предлагает варианты автозаполнения при вводе.
Вход: Поле ввода. */
const fieldCity = document.getElementById("city");
const arrCities = [
  "Toronto",
  "Tel Aviv",
  "Tbilisi",
  "Haifa",
  "Holiwood",
  "Kiev",
  "Kazan",
];

function autoFill(field, arr) {
  let enter = field.value;
  let variations = [];
  for (let item of arr) {
    if (item.toLowerCase().startsWith(enter.toLowerCase())) {
      variations.push(item);
    } //не знаю как решить
  }
  return variations;
}
fieldCity.addEventListener("input", function () {});
console.log(autoFill(fieldCity, arrCities));
/* 13)
Изменение цвета поля:
Создайте форму с несколькими полями ввода.
Напишите функцию, которая при вводе в поле меняет его цвет в зависимости от введенного текста.
Вход: Несколько полей ввода. */
const fieldColor = document.getElementById("color");
const block4 = document.getElementById("block4");
const colors = ["red", "blue", "gray", "yellow", "orange"];
function changeColor(field, block, arr) {
  let fieldValue = field.value.toLowerCase();
  if (arr.includes(fieldValue)) {
    block.style.backgroundColor = fieldValue;
  }
}
fieldColor.addEventListener("input", function () {
  changeColor(fieldColor, block4, colors);
});

/* Работа с DOM и событиями:
14) Создание списка:
Напишите функцию, которая создает список (например, <ul>) на основе массива данных.
Вход: Массив данных.
Ожидаемый результат: Динамически созданный список. */
const block5 = document.querySelector(".block5");
function getList(str) {
  let ul = document.createElement("ul");
  document.block5.append(ul);
  //не знаю
}
/* 15) Изменение стилей с помощью классов:
Создайте элемент (например, <div>).
Напишите функцию, которая при клике на элементе добавляет или удаляет определенный класс для изменения стилей.
Вход: Элемент <div>. */
function switchColor(div) {
  div.addEventListener("click", function () {
    div.classList.toggle("newcolor");
  });
}
switchColor(block5);
/* 
16) Ограничение символов в поле ввода:
Создайте поле ввода с ограничением на количество введенных символов.
Напишите функцию, которая отображает текущее количество символов и предотвращает ввод, когда лимит достигнут.
Вход: Поле ввода и лимит символов. */
