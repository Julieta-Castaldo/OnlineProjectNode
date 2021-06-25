const mongoose = require('../bin/mongodb');

const projectSchema = new mongoose.Schema({  //esquema del documento para la colección productos, crea un modelo y lo exporta
    name:String,
    id:Number,
    description:String,
    status:String,
    manager:String,
    assigned:String,
    date:String,
    image:String
})

module.exports=mongoose.model('project', projectSchema);