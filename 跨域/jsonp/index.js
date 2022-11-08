let express = require('express');
let app = express();

app.get('/test', (req, res) => {
    const { callback } = req.query;
    res.end(`${callback}('jsonp')`);
});

app.listen(3000, () => console.log('Server is running...'));