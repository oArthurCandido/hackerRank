var arr = [4, 1, 2, 5, 3];

function miniMaxSum(arr) {
  var mini = 0;
  var max = 0;
  arr.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < 4; i++) {
    max += arr[i];
  }

  for (let j = 4; j > 0; j--) {
    mini += arr[j];
  }
  console.log(mini, max);
}

miniMaxSum(arr);
