import React from "react";
import { Consumer } from "../swapi-service-context/swapi-service-context";


 const withSwapiService =(mapSwapiService) => (Wrapper)=>{
    return (props)=>{
        return (
        <Consumer>
            
            {   (swapiServis)=>{
                mapSwapiService(swapiServis);
                    return(
                        <Wrapper {...props} {...mapSwapiService(swapiServis)}/>
                    )
                }   
            }
            
        </Consumer>
    )}
};

export default withSwapiService;