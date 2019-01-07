const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const shell = require('shelljs');
// shell.mkdir('A');
//shell.touch('A/package.json');
// shell.cd('A');
//shell.exec('npm init -y', { silent: false }).output;
// shell.exec('yarn create react-app my-app', { silent: false }).output;
// shell.cd('my-app');
// shell.exec('npm start', { silent: false }).output;

const app = express();


// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, '../dist')));

const cors = require('cors')
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getShell', (req, res) => {
  shell.mkdir('A');
  shell.touch('A/package.json');
  shell.cd('A');
  //shell.exec('npm init -y', { silent: false }).output;

  shell.exec('npm init -y', (code, stdout, stderr) => {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
    res.json(stdout);
  });
});

app.get('/api/getList', (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.post('/api/prettify', (req, res) => {
  const prettier = require("prettier");

  const opt = {
    useTabs: false,
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    bracketSpacing: true,
    jsxBracketSameLine: true,
    parser: "babylon",
    trailingComma: "all"
  };

  res.json(prettier.format(req.body.code));
});

app.post('/api/readGeneratedFiles', (req, res) => {

  res.json(prettier.format(req.body.code));
});

// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../dist/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);