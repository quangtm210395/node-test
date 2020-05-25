const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req.params);
  res.send('hello');
});

app.listen(3000, () => {
  console.log('application running at 3000');
});
