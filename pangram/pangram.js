const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const input = 'We promptly judged antique ivory buckles for the next prize';
const minus = input.toLowerCase();
//const splited = minus.split('');

if (alpha.every(j => minus.includes(j))) {
  console.log('pangram');
} else {
  console.log('not pangram');
}
