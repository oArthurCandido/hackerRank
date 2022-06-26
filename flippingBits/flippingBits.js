const n = [2147483647, 1, 0];

// function flippingBits(n) {
//   var flipped = [];
//   for (let i = 0; i < n.length; i++) {
//       flipped.push(4294967295 - n[i])
//       console.log(flipped)
//   }return flipped
// }

// function flippingBits(n) {
//   var flipped = [];
//   for (let i = 0; i < n.length; i++) {
//       let pusher = 4294967295 - n[i]
//       flipped.push(pusher)

//   }console.log(flipped)
// }

function flippingBits(n) {
  return 4294967295 - n;
}

console.log(flippingBits(n));

//valor total (4294967295)
