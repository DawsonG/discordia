const fs = require('fs-extra');
const path = require('path');
const { NlpManager } = require('node-nlp');
const parse = require('csv-parse/lib/sync')

const prefix = 'tavern';

const domains = [];
const classifier = new NlpManager({ languages: ['en'] });

const documents = parse(fs.readFileSync(path.resolve(__dirname, 'data', `${prefix}-intents.csv`), 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});

let rowCount = 0;
documents.forEach(doc => {
  rowCount++;
  classifier.addDocument('en', doc.Phrase, doc.Intent);
});

console.log(`Parsed ${rowCount} rows to documents`);

const answers = parse(fs.readFileSync(path.resolve(__dirname, 'data', `${prefix}-answers.csv`), 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
});

rowCount = 0;
answers.forEach(ans => {
  rowCount++;
  classifier.addAnswer('en', ans.Intent, ans.Phrase);
});

console.log(`Parsed ${rowCount} rows to answers`);

(async () => {
  await classifier.train();
  await classifier.save(path.resolve(__dirname, 'models', `${prefix}-model.nlp`));
})();