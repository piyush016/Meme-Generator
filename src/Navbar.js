import React from "react";
import Typewriter from 'typewriter-effect';
import logo from "./logo.png";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="nav--logo" />
      <div><Typewriter
  options={{
    strings: ['MemeClub...', 'Generate your own meme!!!'],
    delay: 75,
    deleteSpeed:100,
    autoStart: true,
    loop: true,
  }}
/></div>
    </nav>
  );
}
