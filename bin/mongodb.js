var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://julietacast:juli1234@cluster0.qbeg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { UserNewUrlParser: true}, function (error) {

       if(error){
           throw error;
       }
       else{
           console.log("Conectado a MongoDB");
       }
}); 

module.exports = mongoose;
