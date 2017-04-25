const fs = require('fs');
const path = require('path');

const INPUT = path.resolve(__dirname, './azuredeploy.src.json');
const OUTPUT = path.resolve(__dirname, '../core/azuredeploy.json');

fs.readFile(INPUT, 'utf8', (err, text) => {
  if (err) throw err;

  text = removeComments(text);

  fs.writeFile(OUTPUT, text, (err) => {
    if (err) throw err;
  });
});

function removeComments(text) {
  return text
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/^\s*\/\*(\s|\S)*?\*\/\s*$/gm, '');
}
