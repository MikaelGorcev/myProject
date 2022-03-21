import React from "react";
import "./item-list.css";
import { Link } from "react-router-dom";


const ItemList = (props) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;

      const value = props.children(item);
      return (
        <Link to={`details/${id}`} key={id} className="a">
          <li onClick={() => props.idSelect(id)}>{value}</li>
        </Link>
      );
    });
  };
  const item = renderItems(props.dataItem);
  return (
    <div className="item-list">
      <ul>{item}</ul>
    </div>
  );
};

export default ItemList;
