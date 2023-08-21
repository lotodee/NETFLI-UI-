import React, { useState , useEffect } from "react";
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios"
const Featured = ({type}) => {
  const url = 'http://localhost:8800/api/';
  const [content , setContent] = useState({})
  useEffect(() => {
   const getRandomContent = async()=>{

    try{
      const res = await axios.get(`${url}movies/random?=series`,
      {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDgwYTc2Y2NhMjEwN2NkYzFhMTQwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjYyODIyMCwiZXhwIjoxNjkzMDYwMjIwfQ.yVVfbVTuQLcqgNea2M_8yf0vi_UDaN82Aw3WY9yaSwM"
        }
      }
      )
      console.log(res.data[0])
      setContent(res.data[0])
    
    }catch(err){
      console.log(err)
    }
  
   
   }
   getRandomContent()
  }, [type])
  
  return (
  
        <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
            
              <option>Genre</option>
            
              <option  id="genre" value="adventure">Adventure</option>
              <option  id="genre" value="comedy">Comedy</option>
              <option  id="genre" value="crime">Crime</option>
              <option  id="genre" value="fantasy">Fantasy</option>
              <option  id="genre" value="historical">Historical</option>
              <option  id="genre" value="horror">Horror</option>
              <option  id="genre" value="romance">Romance</option>
              <option  id="genre" value="sci-fi">Sci-fi</option>
              <option  id="genre" value="thriller">Thriller</option>
              <option  id="genre" value="western">Western</option>
              <option  id="genre" value="animation">Animation</option>
              <option  id="genre" value="drama">Drama</option>
              <option  id="genre" value="documentary">Documentary</option>
         
            </select>
          </div>
      )}
 <img
        src={content.img}
        alt=""
      />
 <div className="info">
    <img src={content.imgTitle} 
    alt="" />
    <span className="desc">
   {content.desc}
    </span>
    <div className="buttons">
        <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
        </button>
        <button className="more">
            <InfoOutlinedIcon/>
            <span>info</span>
           
        </button>
    </div>
 </div>

    </div>
  
  );
};

export default Featured;
