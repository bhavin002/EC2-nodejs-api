const express = require('express');
const cors = require('cors');
const data = require('./data');
const app = express();

app.use(cors());


app.get('/', (req, res) => {
  if(data.length > 0) {
    res.json(data);
  }
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
