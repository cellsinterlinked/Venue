import React from "react";
import { Link } from "react-router-dom";
import {IoCloseSharp} from 'react-icons/io5';
import './MobileLinks.css';

const MobileLinks = ({toggle}) => {
  return (
    <div className="mobile-links_wrapper">
      <div className="drawer-close" onClick={toggle}>
        <IoCloseSharp className="drawer-x" />
      </div>
      <div className="mobile-brand_wrapper">
        <h1><strong>C</strong>lub <strong>D</strong>apper</h1>
      </div>

      <div className="mobile-links_list" >
        <Link to="/" onClick={toggle}>HOME</Link>
        <Link to="/about" onClick={toggle}>ABOUT</Link>
        <Link to="/photos" onClick={toggle}>PHOTOS</Link>
        <Link to="/pricing" onClick={toggle}>PRICING</Link>
        <Link to="/calendar" onClick={toggle}>CALENDAR</Link>
        <Link to="/book" onClick={toggle}>BOOK</Link>
      </div>
    </div>
  );
};

export default MobileLinks;
