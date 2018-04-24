const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 2000;
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});