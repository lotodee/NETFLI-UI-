
const router = require("express").Router();
const List = require("../models/List");
const Movie = require("../models/Movie");
const verify = require("../verifyToken");


//CREATE LIST

router.post('/' , verify , async(req,res)=>{

    if(req.user.isAdmin){
        const newList = new List(req.body)
try{
        const savedList = await newList.save();
   
res.status(200).json(savedList)


}catch(err){
    res.status(500).send(err);
}
    }else{
        res.status(403).json("you are not allowed")
    }


})



//DELETE LIST

router.delete('/:id' , verify , async(req,res)=>{

    if(req.user.isAdmin){
     
        
         try{
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("the movie has being deleted")
         }catch(Err){
            res.status(500).json("movie not found")
         }

    }else{
        res.status(403).json("you are not authorized")
    }

})


//GET

router.get('/'  , verify , async(req,res)=>{
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let list = [] ;

    try{
  if(typeQuery){
    if(genreQuery){
        list = await List.aggregate([
                {$sample: {size:10}},
                {$match:{type:typeQuery, genre:genreQuery}},

        ]);

    }
    else{
        list = await List.aggregate([
            {$sample: {size:10}},
            {$match:{type:typeQuery}},
        ]);
    }
  }else{
    list = await List.aggregate([{$sample:{size:10}}])
  }
res.status(200).json(list)
  
    }catch(Err){
        res.status(500).json(Err)
    }


})


module.exports = router



