const express = require('express');
const app = express();
const serverController = require('./serverController');
const cors = require('cors');

app.use(express.static(__dirname +'/'));
// app.get('/', (req, res) => {
//
// });
app.use(cors());

app.post('/test', serverController.evaluateCode);

app.listen(3001);
console.log('Listening on http://localhost:3001');
