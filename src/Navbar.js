import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        src="netflix-logo.png"
        alt="Netflix Logo"
      />

      <img
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        src="avatar.png"
        alt="avatar"
      />
    </div>
  );
}
