const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/read', (req, res) => {
  console.log("read " + req.query.value);
  res.json({count:5});
});
let num = 0;
app.post('/api/create', (req, res) => {
  console.log("create " + req.body.value);
  num += Number(req.body.value);
  console.log("num = " + num);
  res.json({count:num});
});

const PORT = process.env.PORT || 5000;   //change when deploying.

app.listen(PORT, () => `Server running on port ${PORT}`);
