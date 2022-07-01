arr = [1, 5, 6, 4, 7, 8, 9, 10];

function mediana(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let multi = Math.floor(arr.length / 2);
  return arr[multi];
}

console.log(mediana(arr));
