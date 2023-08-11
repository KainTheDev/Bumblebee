const client = require("../index");
client.on('ready', () => {
  const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(4000, () => {
  console.log('Express - webview: ✅');
});
})