import React from "react";
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <div className="innerNav">
        <div className="logo">
          <Link to="/">
            <h4>stefan barcelo™</h4>
          </Link>
        </div>
        <div className="menuBtnCon">
          <div className="menu">
            <p>menu</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
