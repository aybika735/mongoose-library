const Genre = require('../models/Genre.model');

module.exports.genrescontroller={
   createGenre: async function(req, res) {
   try{
    await Genre.create({
        name: req.body.name,
       
    });
    res.json("Жанр добавлен");
   }catch(error){
    console.log(error.toString())
}
  
    
  },
  deleteGenreById: async function(req,res){
    try{
         const genre = await Genre.findByIdAndRemove(req.params.id)
    res.json("Жанр удален");
    }catch(error){
        console.log(error.toString())
    }
   
},

getGenres: async(req, res)=>{
    try{
         const genres = await Genre.find()
    res.json(genres);
    }catch(error){
        console.log(error.toString())
    }
   
}
}