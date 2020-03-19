const fs = require('fs');
const ndjson = require('ndjson');
const express = require('express')

let drawings = [];
fs.createReadStream('rainbow.ndjson')
    .pipe(ndjson.parse())
    .on('data', function (obj) {
        drawings.push(obj);
    })


const app = express();
const port = 3000;

app.get('/rainbow', (request, response) => {
    const index = Math.floor(Math.random() * drawings.length);
    response.send(drawings[index]);
});

app.listen(port, () => console.log('Listening on port 3000'));

app.use(express.static('public'));