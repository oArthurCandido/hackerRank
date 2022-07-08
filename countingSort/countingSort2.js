//This is a function that counts how many times an integer ((i) where (0<= i < 100)) appears in a array ( with minimum of 100 elements and max of one million elements ) and respond with a new array with 100 integers that correponds to how much times the i integer appears.

const arr = [
  63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
  99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
  89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24,
  87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33,
  46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70,
  33
];
const arr2 = [
  63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75,
  52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97,
  16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35,
  58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17,
  98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49,
  82
];

const arr3 = [1, 1, 3, 2, 1];

function countingSort(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var counter = 0;
  var output = [];
  for (let i = 0; i < 100; i++) {
    counter = 0;
    for (let c = 0; c < arr.length; c++) {
      if (arr[c] == i) {
        counter++;
      }
    }
    output.push(counter);
  }
  return output;
}

console.log(countingSort(arr));
