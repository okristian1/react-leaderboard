// server/index.js
'use strict';

const app = require('./app');

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
