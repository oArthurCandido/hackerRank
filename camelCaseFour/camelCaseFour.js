var input = require('fs').readFileSync('./stdin', 'utf8');

function processData(input) {
  var lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let splited = lines[i].split(';');
    if (splited[0] == 'S') {
      let coreText = splited[2].replace('()', '');
      coreText = coreText.split(/(?=[A-Z])/);
      if (splited[1] == 'C' || splited[1] == 'V') {
        coreText = coreText.join(' ');
        coreText = coreText.toLowerCase();
        console.log(coreText);
      }
      if (splited[1] == 'M') {
        coreText = coreText.join(' ');
        coreText = coreText.toLowerCase();
        console.log(coreText);
      }
    }
    if (splited[0] == 'C') {
      let joinText = splited[2].split(' ');
      for (let j = 0; j < joinText.length; j++) {
        joinText[j] = joinText[j][0].toUpperCase() + joinText[j].substr(1);
      }
      joinText = joinText.join('');
      if (splited[1] == 'C') {
        console.log(joinText);
      } else if (splited[1] == 'V') {
        joinText = joinText[0].toLowerCase() + joinText.substr(1);
        console.log(joinText);
      } else if (splited[1] == 'M') {
        joinText = joinText[0].toLowerCase() + joinText.substr(1);
        joinText = joinText.replace(/(\r\n|\n|\r)/gm, '');
        console.log(joinText + '()');
      }
    }
  }
}

processData(input);

// S;V;iPad
// C;M;mouse pad
// C;C;code swarm
// S;C;OrangeHighlighter

//Combine Method - camel case = camelCase()
//Combine Class - camel case - CamelCase
//Combine Variable - camel case  - camelCase
//Split Method - camelCase() - camel case
//Split Class - CamelCase - camel case
//Split Variable - camelCase - camel case
