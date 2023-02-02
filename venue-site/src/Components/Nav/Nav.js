import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Backdrop from "../Modal/Backdrop";
import SideDrawer from "./SideDrawer";
import MobileLinks from "./MobileLinks";

const Nav = () => {
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(!open);
  };

  let navbar;
  let lastScrollTop;

  useEffect(() => {
    lastScrollTop = 0;
    navbar = document.getElementById("navbar");
  }, []);

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-4rem";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });

  return (
    <>
      {open && <Backdrop onClick={toggle} />}
      <SideDrawer show={open}  children={<MobileLinks toggle={toggle} />} />

      <div className="nav_container" id="navbar">
        <div className="nav_desktop">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/photos">PHOTOS</Link>
          <h3>Club Dappér</h3>
          <Link to="/pricing">PRICING</Link>
          <Link to="/calendar">CALENDAR</Link>
          <Link to="/book">BOOK</Link>
        </div>

        <div className="nav_mobile">
          <div className="hamburger_container" onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
