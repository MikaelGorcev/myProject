import React from "react";
import './item-list.css';
import { Link } from "react-router-dom";


const ItemList =(props)=>{
    console.log(props);
    const {params}=props;
    const  renderItems=(arr)=>{
        
        return arr.map((item)=>{
            const {id}=item;
            // const {params} = props.urlParams;
            const value =props.children(item) 
            return (<Link to={`${id}`} key={id}><li  onClick={()=> props.idSelect(id)}>{value}</li></Link>)
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

