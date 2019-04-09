const express = require('express');
let app = express();
let port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('not authorized');
})

let version1 = 'api/v1';
app.get(`/${version1}`, (req, res) => {
	res.send('cmmx version 1')
})

app.listen(port, () => console.log(`listening on port ${port}`));