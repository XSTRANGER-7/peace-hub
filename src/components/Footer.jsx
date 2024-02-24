import React from "react";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="lefty">
        <h2>MentalHealth</h2>
        <p>@all rights reserved</p>
        <h3>Follow us on </h3>
        <p>mentalhealth@shotmail.in</p>
      </div>
      <div className="righty">
        <AiOutlineMail />
        <AiOutlineWhatsApp />
        <AiOutlineTwitter/>
        <AiOutlineGithub/>
        <AiOutlineInstagram/>
        <AiOutlineLinkedin/>
      </div>
    </footer>
  );
};

export default Footer;
