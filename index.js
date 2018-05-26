const express = require('express');
const { json } = require('body-parser');
const app = express();

app.use(json());

app.get('/chia/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (isNaN(a) || isNaN(b)) {
        return res.send({ success: false, message: 'INVALID_TYPE' });
    }
    if (b == 0) {
        return res.send({ success: false, message: 'DIVIDE_BY_ZERO' });
    }
    const result = +a / +b;
    res.send({ success: true, result });
});

app.post('/chia', (req, res) => {
    const { a, b } = req.body;
    if (isNaN(a) || isNaN(b)) {
        return res.send({ success: false, message: 'INVALID_TYPE' });
    }
    if (b == 0) {
        return res.send({ success: false, message: 'DIVIDE_BY_ZERO' });
    }
    const result = +a / +b;
    res.send({ success: true, result });
});

app.listen(4000, () => console.log('Server started.'));
