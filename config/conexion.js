let mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://julietacast:juli1234@cluster0.qbeg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useMongoClient: true});

module.exports = mongoose;
