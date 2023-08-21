import "./listitem.scss";
import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const url = 'http://localhost:8800/api/';
  const [isHovered, setIsHovered] = useState(false);
 const [movie, setMovies] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${url}movies/find/${item}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDgwYTc2Y2NhMjEwN2NkYzFhMTQwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjYyODIyMCwiZXhwIjoxNjkzMDYwMjIwfQ.yVVfbVTuQLcqgNea2M_8yf0vi_UDaN82Aw3WY9yaSwM"
          }
        });
      
      
     setMovies(res.data)
        
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item]);

  return (
    movie && (
      <Link to={{ pathname: '/watch'}}
        
        >
        <div
          className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={movie.img}
            alt=""
          />
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="infoItem">
                <div className="icons">
                  <PlayArrowIcon className="icon" />
                  <Add className="icon" />
                  <ThumbUpOffAltIcon className="icon" />
                  <ThumbDownOffAltIcon className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    )
  );
};

export default ListItem;
