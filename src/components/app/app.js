import React from "react";
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import { PlanetDetails } from "../sw-components";
import TestService from "../../services/test-service";
import SwapiService from "../../services/swapi-service";

import {Provider} from "../swapi-service-context/swapi-service-context";
import PeopleBlock from "../item-block/people-block";
import PlanetBlock from "../item-block/planet-block";
import ShipBlock from "../item-block/ship-block";
import './app.css';




export default class App extends React.Component {
    

    state={
        
        swapiServis:new SwapiService(),
        
        
    }
    
    contentChange=()=>{
        this.setState(({swapiServis})=>{
            const Service=swapiServis instanceof SwapiService?TestService:SwapiService;
            console.log(Service.name);
            return {swapiServis:new Service()}
        })
    }


    
    
    
    render(){
       // const params = matchPath()
  // console.log(params);
        return (
            <Provider value={this.state.swapiServis}>
                <BrowserRouter>
                
                    
                   
                        <Routes>
                            <Route path="/" element={<Header changeContent={this.contentChange}/>}>
                                <Route index element= {<RandomPlanet swapiServis={this.state.swapiServis}/>    }/>
                                <Route index element={<h2>Welcome to San Francisco</h2>}/> 
                                <Route  path="people" element={<PeopleBlock/>}/>
                                <Route  path="ship" element={<ShipBlock/>}/>
                                <Route  path="planet/*" element={<PlanetBlock/>}/>
                                {/* <Route  path="planet/:id" element={<PlanetBlock/>}/> */}
                                
                                <Route  path='planet/:id' element={<PlanetDetails/>}/>  
                            </Route>
                        </Routes>
                        
                </BrowserRouter>
            </Provider>
            
        )
    }
}
