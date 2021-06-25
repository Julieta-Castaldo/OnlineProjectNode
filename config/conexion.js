var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gonzalo:gonzalo1234@cluster0.km0wp.mongodb.net/test?retryWrites=true&w=majority', {userNewUrlParser: true}, function(error){
    if (error){
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});

module.exports = mongoose;   
