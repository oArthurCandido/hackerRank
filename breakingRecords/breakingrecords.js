var scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42, 2];

function breakingRecords(scores) {
  var scoresLength = scores.length;
  var min = 0;
  var max = -1;
  var minRecord = scores[0];
  var maxRecord = -1;
  for (let i = 0; i <= scoresLength; i++) {
    if (scores[i] > maxRecord) {
      maxRecord = scores[i];
      max++;
    } else if (scores[i] < minRecord) {
      minRecord = scores[i];
      min++;
    }
  }
  return [max + ' ' + min];
}

console.log(breakingRecords(scores));

//aplication with debug setup

// function breakingRecords(scores) {
//   var scoresLength = scores.length;
//   var min = 0;
//   var max = -1;
//   var minRecord = scores[0];
//   var maxRecord = -1;
//   for (let i = 0; i <= scoresLength; i++) {
//     if (scores[i] > maxRecord) {
//       console.log('max '+scores[i] + ' > ' + maxRecord);
//       maxRecord = scores[i];
//       max++;
//     } else if (scores[i] < minRecord) {
//       console.log('min '+scores[i] + ' < ' + minRecord);
//       minRecord = scores[i];
//       min++;
//     }
//   }
//   return [max + ' ' + min];
// }
