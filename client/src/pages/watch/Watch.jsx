import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useLocation ,Link } from "react-router-dom";

export default function Watch() {
  const url = 'http://localhost:8800/api/';
   const location=useLocation() 
  
 console.log(location)
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        controls
        progress="true"
        src=""
        
      />
    </div>
  );
}