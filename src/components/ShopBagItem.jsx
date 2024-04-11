import React, { useContext } from "react";
import "./shopbagitem.css";
import { AppContext } from "../App";

const ShopBagItem = ({ index, game }) => {
  const { bag, setBag } = useContext(AppContext);
  const handleRemoveItem = (game) => {
    setBag(bag.filter((item) => item.id !== game.id));
  };
  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td>
        <img
          src={game.background_image}
          alt="game image"
          className="img-fluid"
        />
      </td>
      <td>{game.name}</td>
      <td>${game.price.toFixed(2)}</td>
      <td>{game.discount * 100} %</td>
      <td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
      <td>
        <a href="#">
          <i
            className="bi bi-trash3-fill"
            onClick={() => handleRemoveItem(game)}
          ></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopBagItem;
