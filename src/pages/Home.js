import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeLogo">
          stefan<br></br>barcelo<span>†</span>
        </div>
        <div className="homeGrid">
          <div className="block">web</div>
          <div className="block">shop</div>
          <div className="block">contact</div>
          <Link to="/Graphics" className="block">
            graphics
          </Link>
        </div>
        <div className="socialLinks">
          <a href="www.google.com">Instagram</a>
          <a href="www.google.com">Behance</a>
        </div>
      </div>
    </div>
  );
}
