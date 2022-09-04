const Review = require('../models/Review.model');
const mongoose = require("mongoose");
module.exports.reviewscontroller={
   createReview: async function(req, res) {
   try{
    await Review.create({
       text: req.body.text,
       author: req.body.author,
       book:req.body.book,
    });
    res.json("Рецензия добавлена");
   }catch(error){
    console.log(error.toString())
}
  
    
  },
  deleteReviewById: async function(req,res){
    try{
         const review = await Review.findByIdAndRemove(req.params.id)
    res.json("Рецензия удалена");
    }catch(error){
        console.log(error.toString())
    }
   
},

getReviewByBook: async(req, res)=>{
    try{
    const reviews = await Review.find().populate(['author', 'book']);
    res.json(reviews);
    }catch(error){
        console.log(error.toString())
    }
   
}
}