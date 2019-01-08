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

app.post('/api/generateApp', (req, res) => {
  console.log('console: body', req.body);

  const shell = require('shelljs');
  const settings = req.body.appSettings;
  console.log('console: settings', settings);
  const dest = settings.shift();
  console.log('console: dest', dest);

  shell.mkdir(dest);
  shell.cd(dest);
  const xxx = shell.exec('npm init -y', { silent: false });
  console.log('console: xxxxxxxxxxx', xxx.output);
});

app.get('/api/readGeneratedFiles', (req, res) => {
  console.log('console: aaaaaaaaaaaaa');
  const dirTree = require("directory-tree");
  const tree = dirTree("/Users/bienvenue/Documents/1");
  console.log('console: treetreetree', JSON.stringify(tree));
  const packageJsonContent = readPasckageJson('/Users/bienvenue/Documents/1/1.txt');
  console.log('console: -----------', packageJsonContent);
  res.json(JSON.stringify(tree));
});

function readPasckageJson(file) {
  const fs = require("fs");
  return fs.readFile(file, (err, data) => {
    if (err) console.log(err);
    console.log('dadadada', data.toString());
  });
};


function runNpmShow(dep) {
  const npmRun = require('npm-run');
  const result = {};
  return new Promise((resolve) => {
    npmRun.exec(`npm show ${dep} dist-tags`, (err, stdout) => {
      if (!err) {
        const parsed = stdout.match(/latest: '(.*?)'/i);

        if (!parsed || undefined === parsed[1]) {
          console.error(`Could not obtain the latest version for: ${dep}. Skip.`);
        } else {
          result[dep] = `^${parsed[1]}`;

          console.log(`Processed: ${dep}, latest version: ${parsed[1]}`);
        }
      } else {
        console.error(`Could not fetch version info for: ${dep}. Skip.`);
      }

      resolve();
    });
  });
}



// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../dist/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);