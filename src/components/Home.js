import React from "react";
import "./Home.css";
import {useNavigate} from 'react-router-dom';
import bg from "../images/bg.svg"
function Home() {
    const navigate=useNavigate();
    
    return (
        <div className="A ">
            <img src={bg} alt="icon" width="500px" className='d-block mx-auto p-3 m-3' />
            
            <div className="container w-50 Ab "><p>Create a portfolio that’s as unique and creative as you are. Impress potential clients and employers from the get-go with a stunning portfolio design made using Canva’s free online portfolio maker. Easily create professional-looking portfolios that showcase your skills and qualifications sans the hassle of website building or learning advanced graphic design.</p></div>
          
           <div className="Ac">
               <button type="button" className="h" onClick={()=>{navigate("/HostEvent")}}> Get Started</button>
               </div>
               
        </div>

    );
}

export default Home;
