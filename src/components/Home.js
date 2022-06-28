import React from "react";
import "./Home.css";
import {useNavigate} from 'react-router-dom';
import bg from "../images/bg.svg"
function Home() {
    const navigate=useNavigate();
    
    return (
        <div className="A">
            <img src={bg} alt="icon" width="500px" className='d-block mx-auto p-3 m-3' />
           <div className="Ac">
               <button type="button" className="btn btn-warning btn-rounded" onClick={()=>{navigate("/HostEvent")}}> Get Started</button>
               </div>
        </div>
    );
}

export default Home;
