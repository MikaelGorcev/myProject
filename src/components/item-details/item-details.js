import React from "react";

import Loader from "../loader/loader";
import './item-details.css'

const BlockItemText=({state, field,label})=>{
    
    return(
        <li>{label} {state[field]}</li>
    )
}
export {BlockItemText};
export default class ItemDetails extends React.Component{
    
    state={
        id:null,
       image:null,
       loading:true,
       renderError:false,
       selectedItem:null
   };
    

   onUpdate=(data)=>{
        
        this.setState(data);
        this.setState({loading:false});
        this.setState({image:this.props.dataImage(this.state.id)});
        
    }


    updateItem(){
        
        const {selectedItem, getData }=this.props;
        
        getData(selectedItem ).then(this.onUpdate);
        
    }

    componentDidMount(){
        
        if(this.props.selectedItem!=null){
            this.setState({selectedItem:this.props.selectedItem,loading:true});
            this.updateItem();
        }
        
    }

   componentDidUpdate(prevP){
    if (this.props.getData!==prevP.getData){this.setState({selectedItem:null})};
     if (this.props.selectedItem!==prevP.selectedItem ) { this.updateItem(); this.setState({selectedItem:this.props.selectedItem})};
    
   }

   throwError=()=>{
       this.setState({renderError:true})
   }

   

    render(){
       
        const {state}=this;
        if(this.state.renderError){this.foo.bar=0};

        if (!this.state.selectedItem){
            return (
                <div className='empty'><p>Выбери персонажа</p></div>
            )
        };  

        if(this.state.loading){return <Loader/>};
   
       return(
           
           <div className='person-details d-flex'>
               {<img src={this.state.image} alt='starswars'/> }
               <ul>
                   {React.Children.map(this.props.children,(child)=>{
                       return React.cloneElement (child, {state})/////////////штука которая присваивает нужному чаилду свойство любого обьекта кторый есть на этой странице
                       })}
                   
                   <button onClick={this.throwError}>throw error</button>
               </ul>
               
           </div>
           
           
       )
   }
};

 