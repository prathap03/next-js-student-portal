const fs = require('fs');
const https = require('https');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./key.key'),
  cert: fs.readFileSync('./cert.crt'),
};

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3001');
  });
});

https.createServer(httpsOptions, (req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
}).listen(3000, (err) => {
  if (err) throw err;
  console.log('> Ready on https://localhost:3000');
});
