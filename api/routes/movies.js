const router = require("express").Router();
const Movie = require("../models/Movie");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
const newMovie = new Movie(req.body)

try {
    const savedMovie = await newMovie.save()
    res.status(201).json(savedMovie)
} catch (error) {
    res.status(500).json(error)
}

  }
  else{
    res.status(403).json("you are not allowed")
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
  
  
  try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        },
        {new:true}
        )
      res.status(200).json(updatedMovie)
  } catch (error) {
      res.status(500).json(err)
  }
  
    }
    else{
      res.status(403).json("you are not allowed")
    }
  });



  //DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
  
  
  try {
       await Movie.findByIdAndDelete(req.params.id)
      res.status(200).json("The movie has being deleted")
  } catch (err) {
      res.status(500).json(err)
  }
  
    }
    else{
      res.status(403).json("you are not allowed")
    }
  });

  //GET MOVIE

  router.get("/find/:id" , verify , async(req,res)=>{
    
    try{
        let movie=await  Movie.findById(req.params.id)

        res.status(200).json(movie)
    }catch(err){
        res.status(500).json(err)
    }


  })

//GET RANDMOM

router.get('/random' ,verify , async(req,res)=>{
  console.log("yes")
   const type = req.query.type;

   let movie;
try {
    if(type === "series"){
        movie = await Movie.aggregate([
            {$match:{isSeries:true}},
            {$sample : {"size":1}}])
       
    }else{type !== "series"
        movie = await Movie.aggregate([
            {$match:{isSeries:false}},
            {$sample : {"size":1}}])
    }
    res.status(200).json(movie)

} catch (error) {
    
}


})


//GET ALL

router.get('/' , verify , async (req,res)=>{
   
  if(req.user.isAdmin){

    try{
    const movies = await Movie.find()

    res.status(200).json(movies.reverse)//the reverse is to make to show the most recent firt
  }catch(err){
    res.status(500).json(err)
  }
  }else{
    return res.status(403).json("you are not allowed !")
  }
})
module.exports = router;
