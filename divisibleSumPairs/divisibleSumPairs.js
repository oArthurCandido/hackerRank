var n = 6;
var k = 3;
var ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
  var pairs = 0;
  for (let i = 0; i < n; i++) {
    let divided = ar[i];
    for (let j = i + 1; j < n; j++) {
      if ((divided + ar[j]) % k == 0) {
        pairs++;
      }
    }
  }
  console.log(pairs);
}

divisibleSumPairs(n, k, ar);
