const mongoose = require('mongoose');

mongoose.connect('mongodb://abc:123@ds127958.mlab.com:27958/rn1205');

const Word = mongoose.model('Word', {
    en: { type: String, require: true, trim: true, unique: true },
    vn: { type: String, require: true, trim: true },
    isMemorized: { type: Boolean, require: true, default: false }
});

module.exports = { Word };

// SELECT
// Word.find({})
// .then(words => console.log(words));

// INSERT
// const word = new Word({ en: 'Four', vn: 'Bon' });
// word.save()
// .then(w => console.log(w))
// .catch(error => console.log(error.message));

// DELETE
// Word.findByIdAndRemove('5b091dea7e1d9d6485c53731')
// .then(w => console.log(w))
// .catch(error => console.log(error.message));

// UPDATE
// Word.findByIdAndUpdate('5b091df125ef1164901da199', { isMemorized: false }, { new: true })
// .then(w => console.log(w))
// .catch(error => console.log(error.message));
