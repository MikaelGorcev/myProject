import React from "react";
import './item-list.css';
import { Link } from "react-router-dom";
const ItemList =(props)=>{
    
const  renderItems=(arr)=>{
       return arr.map((item)=>{
           const {id}=item;
           const value =props.children(item) 
           return (<li key={id} onClick={()=> props.idSelect(id)}><Link to="details/1">{value}</Link></li>)
        })
    };
const item=renderItems(props.dataItem);
    return (
          <div className="item-list">
                <ul>{item}</ul>
            </div>
    )
};





export default ItemList;

