const Book = require('../models/Book.model');

module.exports.bookscontroller={
   createBook: async function(req, res) {
   try{
    await Book.create({
   name: req.body.name, 
   author: req.body.author,
   genre: req.body.genre,
   reviews: req.body.reviews,
   rents:req.body.rents,
    });
    res.json("Книга добавлена");
   }catch(error){
    console.log(error.toString())
}
  
    
  },
 
  deleteBookById: async function(req,res){
    try{
         const book = await Book.findByIdAndRemove(req.params.id)
    res.json("Книга удалена");
    }catch(error){
        console.log(error.toString())
    }
   
},
changeBookById:async function(req, res){
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,{
   name: req.body.name, 
   author: req.body.author,
   genre: req.body.genre,
   $push: {
    reviews: req.body.reviews,
   },
  
        })
    res.json('Книга изменена')
    }catch(error){
        console.log(error.toString())
    }
    
},
getBookById: async(req, res)=>{
    try{
         const book = await Book.findById(req.params.id).populate('genre')
    res.json(book);
    }catch(error){
        console.log(error.toString())
    }
   
},
 
getBooks: async(req, res)=>{
    try{
    const books = await Book.find().populate('genre');
    res.json(books);
    }catch(error){
        console.log(error.toString())
    }
   
},
getBooksByGenre: async(req, res)=>{
    try{
    const books = await Book.find({genre: req.params.id});
    res.json(books);
    }catch(error){
        console.log(error.toString())
    }
   
}

}