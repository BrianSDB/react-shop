/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavListItem = ({ item, navOnClick }) => {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        <i className={item.icon}></i>{" "}
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
};

export default NavListItem;
