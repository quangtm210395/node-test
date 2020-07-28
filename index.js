const express = require('express');

const app = express();

app.use((req, res, next) => {
  const { headers } = req;
  if (!headers['user-agent']) {
    return res.json({
      message: 'user-agent header is require',
    });
  }
  return next();
});

app.get('/', (req, res) => {
  console.log(req.params);
  res.send('hello');
});

app.listen(3000, () => {
  console.log('application running at 3000');
});
