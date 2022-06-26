function timeConversion(s) {
  let splitted = s.split('');
  let gethour = splitted[0] + splitted[1];
  let hour = Number(gethour);
  if (hour == 12 && splitted[8] == 'P') {
    return `${hour}:${splitted[3] + splitted[4]}:${splitted[6] + splitted[7]}`;
  }
  if (splitted[8] == 'P') {
    hour += 12;
    return `${hour}:${splitted[3] + splitted[4]}:${splitted[6] + splitted[7]}`;
  }
  if (hour == 12 && splitted[8] == 'A') {
    hour -= 12;
    return `0${hour}:${splitted[3] + splitted[4]}:${splitted[6] + splitted[7]}`;
  }
  if (splitted[8] == 'A') {
    return `${splitted[0] + splitted[1]}:${splitted[3] + splitted[4]}:${
      splitted[6] + splitted[7]
    }`;
  }
}

const result = timeConversion('12:05:40PM');
const result1 = timeConversion('11:05:40PM');
const result2 = timeConversion('12:05:40AM');
const result3 = timeConversion('09:05:40AM');
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
