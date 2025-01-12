import React, { useContext } from "react";
import "./header.css";
import userImg from "../images/670720a1fa274703a8edddac58b9325d.webp";
import { AppContext } from "../App";

const Header = ({ toggle }) => {
  const { library, bag } = useContext(AppContext);

  return (
    <header>
      <a href="#" className="menu" onClick={toggle}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href=""> View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
