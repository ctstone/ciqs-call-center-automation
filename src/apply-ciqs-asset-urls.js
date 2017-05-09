const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../core/md');
const SEARCH_PATTERN = /\.\.\/\.\.\/assets/g;
const REPLACE_PATTERN = '{PatternAssetBaseUrl}';

async.waterfall([
  (next) => fs.readdir(ROOT_DIR, next),
  (files, next) => async.each(files, replace, next),
], (err) => {
  if (err) throw err;
});

function replace(file, callback) {
  const filename = path.resolve(ROOT_DIR, file);
  async.waterfall([
    async.apply(fs.readFile, filename, 'utf8'),
    (text, next) => fs.writeFile(filename, text.replace(SEARCH_PATTERN, REPLACE_PATTERN), next),
  ], callback);
}
