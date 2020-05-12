// jshint esversion: 6
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  let result = "";
  if (n % 3 == 0) {
    result += "Bit";
  }
  if (n % 5 == 0) {
    result += "Bat";
  }
  if (n % 7 == 0) {
    result += "Bot";
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result += "Not";
  }
  return result;
};

let findAllbitBatBotOrNots1 = array => {
  return array.map(each => `${each}: ` + bitBatBotOrNot(each));
};

let findAllbitBatBotOrNots2 = arr => {
  let result = [];
  for (var each in arr) {
    result.push(arr[each] + ": " + bitBatBotOrNot(arr[each]));
  }
  return result;
};

let findAllbitBatBotOrNots3 = arr => {
  let result = [];
  for (var each of arr) {
    result.push(each + ": " + bitBatBotOrNot(each));
  }
  return result;
};

let findAllbitBatBotOrNots4 = arr => {
  let result = [];
  arr.forEach(numbers => {
    result.push(bitBatBotOrNot(numbers));
  });
  return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
