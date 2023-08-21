import "./home.scss"
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import { useEffect ,useState } from "react";


function Home({ type }) {
  const url = 'http://localhost:8800/api/'
  const[lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
 
    const getRandomLists = async () => {
      
      try {
        const res = await axios.get(`${url}lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDgwYTc2Y2NhMjEwN2NkYzFhMTQwYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjYyODIyMCwiZXhwIjoxNjkzMDYwMjIwfQ.yVVfbVTuQLcqgNea2M_8yf0vi_UDaN82Aw3WY9yaSwM"
          }
        }
        );

        
    setLists(res.data)

      } catch (Err) {
        console.log("Error", Err);
      }

    };
    getRandomLists();
  }, [type,genre]);

  return (
    <div className='home'>
      <Navbar />

      <Featured type={type} />

      {lists.map((list , i)=>(
 <List list={list} index={i}/>
  ))}
    


    </div>
  );
}

export default Home