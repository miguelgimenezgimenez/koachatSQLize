'use strict';
const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser');
const db = require('./Config/db');

app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(router.routes());

db.authenticate()
  .then(function (err) {
    console.log('connection succesful');
      app.listen(3000);
    })
    .catch(function (err) {
      console.log('unable to connect',err);
  });






