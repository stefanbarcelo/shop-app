import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="innerNav">
        <Link to="/" className="logo">
          stefan barcelo™
        </Link>
        <div className="menuBtnCon">
          <div className="menu">
            <p>menu</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
