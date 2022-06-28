import React from 'react'
import './Landing.css'
import { BsBoxArrowInRight } from "react-icons/bs";
function Landing() {
  return (
    <>
          <div className="showcase">
            <h1>Welcome To Potfolio-Gen</h1>
            <p>Create Your Own Impressive Resume</p>
            <a href="/Login" class="button">Login/SignUp <BsBoxArrowInRight/></a>
          </div>
    </>
  )
}

export default Landing