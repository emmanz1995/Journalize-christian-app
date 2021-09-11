const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');

mongoose.connect(`${MONGOURI}`)
    .then(() => {
        console.log('Connected successfully to mongodb database!');
    })
    .catch((error) => {
        console.log(error);
    })
