const express = require('express');


const app = express();

app.get('/test', (req, res) => {
    const { callback } = req.query;
    res.end(`${callback}('jsonp cross domain')`);
});

app.listen(3000, () => console.log('服务器监听'));