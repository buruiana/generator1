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

function execWrapper(command, options) {
  return new Promise((resolve, reject) => {
    const shell = require('shelljs');
    shell.exec(command, options, (error, out, err) => {
      if (error) return reject(error);
      resolve({ out: out, err: err });
    })
  })
}

app.post('/api/generateApp', (req, res) => {
  const shell = require('shelljs');
  const settings = req.body.appSettings;
  console.log('console: settings', settings);
  const dest = '/Users/bienvenue/Documents/1'; //settings.shift();
  console.log('console: dest', dest);

  shell.mkdir(dest);
  shell.cd(dest);
  let arr = [];
  const child = shell.exec('npm init -y', { async: true });
  child.stdout.on('data', function (data) {
    console.log('console: emit---------------', );
    //io.emit('npm_log', data);
    arr.push(data);
    //res.json(data);
    res.end();
  });

  async function myAsyncFunction() {
    const promises = settings.map((type) => execWrapper(`npm show ${type} dist-tags`));
    let del_arr = Promise.all(promises);
    const res = await del_arr;

    let i = 0;
    
    res.map(e => {
      const parsed = e.out.match(/latest: '(.*?)'/i);
      const str = `"${settings[i]}": "^${parsed[1]}"`;
      console.log('console: emit---------------');
      //io.emit('npm_log', str);
      
      arr.push(str);
      i++;
    });
    console.log('console: emit-done--------------', arr);
    io.emit('npm_log', arr);
    //io.emit('npm_done');
  }

  myAsyncFunction();
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

// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../dist/index.html'));
// });

const port = process.env.PORT || 5000;
server.listen(port);

console.log('App is listening on port ' + port);