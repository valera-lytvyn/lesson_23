function choose_number() {
  let chooseNumber_first = +prompt("Виберіть перше число");
  let chooseNumber_last = +prompt("Виберіть кінцеве число");
  let result = 0;
  if (chooseNumber_last <= chooseNumber_first)
    alert("кінцеве число більше за перше ");
  for (
    chooseNumber_first;
    chooseNumber_first < chooseNumber_last;
    chooseNumber_first++
  ) {
    result += chooseNumber_first;
  }
  console.log(`Сума всіх цифр рівна ${result}`);
}

function divider() {
  let figureFirst = +prompt("Виберіть перше число");
  let figureSecond = +prompt("Виберіть друге число");
  let x = figureSecond;
  let y = figureFirst;
  if (figureFirst <= 0 || figureSecond <= 0) {
    console.log("Виберіть числа  більші 0");
  } else if (figureFirst < figureSecond) {
    for (figureSecond; figureSecond > 0; figureSecond--) {
      if (figureFirst == figureSecond) continue;
      if (x % figureSecond == 0 && figureFirst % figureSecond == 0) break;
    }
    console.log(figureSecond);
  } else {
    for (figureFirst; figureFirst > 0; figureFirst--) {
      if (figureFirst == figureSecond) continue;
      if (y % figureFirst == 0 && figureSecond % figureFirst == 0) break;
    }
    console.log(figureFirst);
  }
}

function all_divider() {
  let chooseNumber = +prompt("Виберіть число");
  let x = chooseNumber;
  for (chooseNumber; chooseNumber > 1; chooseNumber--) {
    if (x % chooseNumber == 0) {
      console.log(chooseNumber);
    }
  }
}

function Number_digits() {
  let x = 10;
  let n = 1;
  let e = 0;
  let y = +prompt("Введіть число");
  for (; y >= x; ) {
    e = y / x;
    y = Math.floor(e);
    if (e >= 1) {
      ++n;
    }
    if (e < 1) break;
  }
  console.log(`Кількість цифр ${n}`);
}

function ten_numbers() {
  let x = 0;
  let y;
  let e = 0;
  let positive = 0;
  let negative = 0;
  let pair = 0;
  let odd = 0;

  for (x; x < 10; x++) {
    y = +prompt("Введіть число");
    if (y < 0) ++negative;
    if (y > 0) ++positive;
    if (y == 0) {
      ++e;
    } else if (y % 2 === 0) {
      ++pair;
    } else if (y % 2 != 0) {
      ++odd;
    }
  }
  console.log(
    `нульові значення: ${e}, відємних: ${negative}, додатні: ${positive}, парні: ${pair}, непарні: ${odd}`
  );
}

function days_week() {
  let d;
  for (d = 1; ; ) {
    if (d == 1) p = "Понеділок";
    if (d == 2) p = "Вівторок";
    if (d == 3) p = "Середа";
    if (d == 4) p = "Четвер";
    if (d == 5) p = "П'ятниця";
    if (d == 6) p = "Субота";
    if (d == 7) p = "Неділя";
    if (confirm(`${p}. Продовжити?`) == false) break;
    d++;
  }
}

function multiplication_table() {
  let x;
  let y;

  for (x = 2; x <= 9; x++) {
    for (y = 2; y <= 9; y++) {
      console.log(`${x} * ${y} = ${x * y}`);
    }
  }
}

function calculator() {
  let figureFirst;
  let arithmetic;
  let figureSecond;
  let result;
  while (true) {
    figureFirst = +prompt("Виберіть перше число");
    arithmetic = prompt("Виберіть арифметичний знак '+', '-', '*', '/'");
    figureSecond = +prompt("Виберіть друге число");
    // if (
    //   arithmetic != "+" ||
    //   arithmetic != "-" ||
    //   arithmetic != "*" ||
    //   arithmetic != "/"
    // )
    //   console.log("Виберіть арифметичний знак '+', '-', '*', '/'");
    if (arithmetic == "+") {
      result = figureFirst + figureSecond;
    } else if (arithmetic == "-") {
      result = figureFirst - figureSecond;
    } else if (arithmetic == "/") {
      result = figureFirst / figureSecond;
    } else if (arithmetic == "*") {
      result = figureFirst * figureSecond;
    }
    console.log(typeof (arithmetic));
    if (confirm(`${result}. Продовжити?`) == false) break;
  }
}

function game() {
  let a = 0;
  let b = 100;
  let x = b;
  let e;
  alert(`загадай число від 0 до 100 <,=,>`);
  for (;;) {
    x = Math.floor((b + a) / 2);
    if (e = prompt(`Число рівне ${x} <,=,>`) == false) break;
    if (e == "<") {
      b = x;
      console.log(0, x);
    }
    if (e == ">") {
      console.log(1, x);
      a = x;
    }
    if (x == 99 && e == ">") e = prompt(`Число рівне 100 <,=,>`);
    if (x == 1 && e == "<") e = prompt(`Число рівне 0 <,=,>`);
    if (e == "=") break;
      }
}

function shift_numbers() {
  let figure = +prompt("Введіть число");
  let shiftNumbers = prompt("Введіть на скільки зсунути");
  let x = 10;
  let n = 1;
  let e = 0;
  let i;
  let j;
  let a;
  let y = figure;
  for (; y >= x; ) {
    e = y / x;
    y = Math.floor(e);
    if (e >= 1) {
      ++n;
    }
    if (e < 1) break;
  }
  if (n < shiftNumbers)
    alert("кількість цифр в числі менше за кількість, на яку потрібно ззунути");
  else if (n == shiftNumbers) alert(`Зсунути получиться хіба так: ${figure}`);
  else {
    j = String(Math.floor(figure / 10 ** (n - shiftNumbers)));
    i = String(figure % 10 ** (n - shiftNumbers));
    a = i + j;
    alert(`Введене число:${figure}, після зсування: ${a}`);
  }
}
