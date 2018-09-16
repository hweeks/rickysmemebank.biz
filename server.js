const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.static(`${__dirname}/static`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/static/index.html`));
});

app.listen(1337, () => {
  console.log('Site up');
});
