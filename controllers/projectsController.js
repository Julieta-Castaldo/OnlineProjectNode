const projectsModel = require('../models/projectsModel')

module.exports ={
    getAll: async function(req, res, next) {
      try{
        const project= await projectsModel.find({});  //consulta los proyectos que tengo en la base de datos con el esquema creado en models
        res.json(project);    //lo que obtiene, lo transforma a un json //
      }
      catch(error){
        next(error);
      }
       
    },

  
    create: async function(req,res,next) {
      console.log(req.body)
      res.json(req.body);
      try{
            const project= new projectsModel({  //creo un proyecto  con estos datos
              name:req.body.name,
              description:req.body.description,
              status:req.body.status,
              manager:req.body.manager,
              assigned:req.body.assigned,
              date:req.body.date,
              image:req.body.image

            })
            const proj = await project.save()   //al hacer el save, lo inserta en base de datos
            res.json(proj);
          }catch(e){
            next(e);
          }
        },  

    
        update: async function(req,res,next) {
          try{
            let project = await projectsModel.updateOne({_id: req.params.id}, {$set:{name:req.body.name, price:req.body.description, status:req.body.status, manager:req.body.manager, assigned:req.body.assigned}}, { multi: false})
            res.json(project);
          }catch(e){
            next(e);
          }
          
      },

  delete: async function(req,res,next){
    try{
      let project = await projectsModel.deleteOne({_id: req.params.id})
      res.json(project);
    }catch(e){
      next(e);
    }
  
},


    getById: async function(req, res, next) {
      try{
        const project= await projectsModel.findById(req.params.id);  //consulta los proyectos que tengo en la base de datos con el esquema creado en models
        res.json(project);    //lo que obtiene, lo transforma a un json //
      }
      catch(error){
        next(error);
      }
       
    }


}
