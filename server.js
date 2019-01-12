const express = require('express');
const http = require('http');
const socketIO = require('socket.io')
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
const server = http.createServer(app)
const io = socketIO(server);
io.setMaxListeners(20);

io.on('connection', socket => {
  console.log('New client connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

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

app.post('/api/prettify', (req, res) => {
  const prettier = require("prettier");
  console.log('console: req.body', req.body);
  const opt = {
    useTabs: false,
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: true,
    parser: `${req.body.parser}`,
    trailingComma: 'all'
  };

  res.json(prettier.format(req.body.code, opt));
});

app.post('/api/generateApp', (req, res) => {
  const shell = require('shelljs');
  const settings = req.body.appSettings;
  console.log('console: settings', settings);
  const dest = '/Users/bienvenue/Documents/1'; //settings.shift();
  console.log('console: dest', dest);

  shell.mkdir(dest);
  shell.cd(dest);
  //const xxx = shell.exec('npm init -y', { silent: false }).output;
  let idx = 0;
  const child = shell.exec('npm init -y', { async: true });
  child.stdout.on('data', function (data) {
    io.emit('npm log', data);
    //res.json(data);
    //res.end();
  }).then(
    settings.map(el => {
      const child = shell.exec(`npm show ${el} dist-tags`);
      child.stdout.on('data', function (data) {
        const parsed = data.match(/latest: '(.*?)'/i);
        const str = `"${el}": "^${parsed[1]}"`
        io.emit('npm log', str);
        console.log('console: sssssss', idx, settings.length);
        if (idx === settings.length-2) {
          io.emit('npm done', 'true')
        } else {
          idx++;
        }
      });
    })
  );
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
  console.log('console: 1111111', );
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
      ccc += result;
      console.log('console:2222222222 ', result);
      resolve();
    });
    console.log('console: 333333333', result);
  });
  console.log('console: 444444', result);
  // return parsed;
}



// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../dist/index.html'));
// });

const port = process.env.PORT || 5000;
server.listen(port);

console.log('App is listening on port ' + port);