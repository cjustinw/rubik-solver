const path = require('path');
const express = require('express');
const solver = require('./solver');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); 

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.post("/solve", (req, res) => {
  const {cube} = req.body;
  let result = solver.solve(cube);
  return res.send({result})
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});