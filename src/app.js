const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('<h1>Welcome to the home page baby</h1>');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Wazzappp`));
