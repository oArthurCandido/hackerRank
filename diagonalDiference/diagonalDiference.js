// var arr = [
//   [50, -50, 50],
//   [-60, -50, 6],
//   [50, 8, -50]
// ];

var arr = [
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [11, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, -30]
];

function diagonalDifference(arr) {
  var arrLength = arr.length - 1;
  var rightLeft = 0;
  var leftRight = 0;
  for (let i = 0; i <= arrLength; i++) {
    let takerrl = arr[i][i];
    rightLeft += takerrl;
    let takerlr = arr[i][arrLength - i];
    leftRight += takerlr;
  }

  return Math.abs(rightLeft - leftRight);
}

console.log(diagonalDifference(arr));

// var line1 = arr[0]
// var line2 = arr[1]
// var line3 = arr[2]
// var rl1 = line1[0]
// var med = line2[1]
// var rl2 = line3[2]
// var lr1 = line1[2]
// var lr2 = line3[0]

// var rightLeft = Math.abs((arr[0][0]) + (arr[1][1]) + (arr[2][2]));
//   var leftRight = Math.abs((arr[0][2]) + (arr[1][1]) + (arr[2][0]));
//   return Math.abs((leftRight) - (rightLeft));

console.log(-20 + -20 + -20);

1, 2, 3, 4;
1, 2, 3, 4;
1, 2, 3, 4;
1, 2, 3, 4;
