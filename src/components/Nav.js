import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="innerNav">
<<<<<<< HEAD
        <Link className="logo" to="/">
          <h4>stefan barcelo™</h4>
=======
        <Link to="/" className="logo">
          stefan barcelo™
>>>>>>> 43241eaa0273d408e0560806fa4a5ad186706afa
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
