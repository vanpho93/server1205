const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { Word } = require('./word.model');

const app = express();

app.use(cors());
app.use(json());

app.get('/word', (req, res) => {
    Word.find({})
    .then(words => res.send({ success: true, words }));
});

app.post('/word', (req, res) => {
    const { en, vn } = req.body;
    const newWord = new Word({ en, vn });
    newWord.save()
    .then(word => res.send({ success: true, word }))
    .catch(error => res.send({ success: false, message: 'INVALID_INPUT' }));
});

app.delete('/word/:_id', (req, res) => {
    Word.findByIdAndRemove(req.params._id)
    .then(word => {
        if (!word) throw new Error('CANNOT_FIND_WORD');
        res.send({ success: true, word });
    })
    .catch(error => res.send({ success: false, message: 'INVALID_INPUT' }));
});

app.put('/word/:_id', (req, res) => {
    const { isMemorized } = req.body;
    Word.findByIdAndUpdate(req.params._id, { isMemorized }, { new: true })
    .then(word => {
        if (!word) throw new Error('CANNOT_FIND_WORD');
        res.send({ success: true, word });
    })
    .catch(error => res.send({ success: false, message: 'INVALID_INPUT' }));
});

app.listen(process.env.PORT || 4000, () => console.log('Server started.'));
