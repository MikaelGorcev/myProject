import React from "react";

 const withItemId=(SomeComponent,id)=>{
     
    return (

        <SomeComponent  selectedItem={id}/>
    )
};

export default withItemId;