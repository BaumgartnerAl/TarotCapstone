import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
  
function Navbar () {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reading">Readings</Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};
  
export default Navbar;