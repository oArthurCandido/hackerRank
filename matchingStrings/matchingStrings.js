// this exercise challenged me to match strings inside the query variable with the strings in the strings variable and return an array with the match numbers of each string in the query variable.

var strings = ['aba', 'baba', 'aba', 'xzxb'];
var queries = ['aba', 'xzxb', 'ab'];

function matchingStrings(strings, queries) {
  stringsLength = strings.length;
  queriesLength = queries.length;
  var finalPairs = [];
  for (i = 0; i < queriesLength; i++) {
    var pairs = 0;
    let compare = queries[i];
    for (let j = 0; j < stringsLength; j++) {
      if (compare == strings[j]) {
        pairs++;
      }
    }
    finalPairs.push(pairs);
  }
  return finalPairs;
}

matchingStrings(strings, queries);
