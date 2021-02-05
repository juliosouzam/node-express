const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('<h1>Welcome to the home page baby</h1>');
});

app.listen(3000, () => console.log(`Wazzappp`));
