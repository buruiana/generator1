const express = require('express');
const http = require('http');
const socketIO = require('socket.io')
const bodyParser = require('body-parser');
const shell = require('shelljs');
const prettier = require("prettier");
const fs = require("fs");
const cors = require('cors');
const app = express();
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

function copyFiles(src, dest) {
  shell.exec(`cp -r ${src} ${dest}`);
};

app.post('/api/prettify', (req, res) => {

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
    shell.exec(command, options, (error, out, err) => {
      if (error) return reject(error);
      resolve({ out: out, err: err });
    })
  })
}

app.post('/api/generateApp', (req, res) => {
  const settings = req.body.appSettings;
  const src = '/Users/bienvenue/Documents/Projects/generator1/templates/';
  const projectName = settings.shift();
  const dest = settings.shift() + '/' + projectName;

  shell.mkdir(dest);
  shell.cd(dest);
  myAsyncFunction(settings, src, dest);
  // const child = shell.exec('npm init -y', { async: true });
  // io.sockets.emit('npm_log', 'Generating package.json...\n');
  // child.stdout.on('data', function (data) {
  //   io.sockets.emit('npm_log', data);
  //   io.sockets.emit('npm_log', 'Installing dependencies...\n');
  //   res.end();
  //   myAsyncFunction(settings, src, dest);
  // });
});

const package = `
{
  "name": "name",
  "version": "1.0.0",
  "description": "",
  "main": "src/web/index.js",
  "scripts": {
    "test": "",
    "start": "parcel src/web/index.html"
  },
  "browserslist": [
    "last 1 Chrome version"
  ],
  "keywords": [],
  "author": "M",
  "license": "ISC",
  "dependencies": {
    replaceDependencies
  },
}
`;

function generatePackageJson(dependencies) {
  return package.replace('replaceDependencies', dependencies);
}

async function myAsyncFunction(settings, src, dest) {
  const promises = settings.map((type) => execWrapper(`npm show ${type} dist-tags`));
  io.sockets.emit('npm_log', 'Getting dependencies...');
  let del_arr = Promise.all(promises);
  const res = await del_arr;
  let arr = [];
  let i = 0;

  res.map(e => {
    const parsed = e.out.match(/latest: '(.*?)'/i);
    const str = `"${settings[i]}": "^${parsed[1]}"`;
    arr.push('\n' + str);
    i++;
  });

  io.sockets.emit('npm_log', arr);
  io.sockets.emit('npm_log', 'Generating package.json');
  const opt = {
    parser: 'json'
  };
  const package = prettier.format(generatePackageJson(arr), opt);
  fs.writeFileSync(`${dest}/package.json`, package, 'utf8');
  io.sockets.emit('npm_log', package);
  io.sockets.emit('npm_log', 'Copying files...\n');
  copyFiles(src, dest);
  io.sockets.emit('npm_log', 'Done!');
  io.sockets.emit('npm_done');
}


const port = process.env.PORT || 5000;
server.listen(port);

console.log('App is listening on port ' + port);