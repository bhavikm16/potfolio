import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
<div className="container my-5">
  <footer className="text-center text-lg-start" style="background-color: #db6930;">
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <FaFacebook/>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <FaSnapchat/>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <FaInstagram/>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style="background-color: #54456b;">
        <FaTwitter/>
      </button>
    </div>
    <div className="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer