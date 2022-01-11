import React from "react";
import Header from '../header/header';

import { BrowserRouter,Route, Routes} from "react-router-dom";

import TestService from "../../services/test-service";
import SwapiService from "../../services/swapi-service";

import {Provider} from "../swapi-service-context/swapi-service-context";
import PeopleBlock from "../item-block/people-block";
import PlanetBlock from "../item-block/planet-block";
import ShipBlock from "../item-block/ship-block";
import './app.css';




export default class App extends React.Component {
    

    state={
        
        swapiServis:new TestService(),
        
        
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
                            <Route path="/" element={
                                <Header changeContent={this.contentChange} swapiServis={this.state.swapiServis}/> }>
                                <Route  path="people/*" element={<PeopleBlock/>}/>
                                <Route  path="ship/*" element={<ShipBlock/>}/>
                                <Route  path="planet/*" element={<PlanetBlock/>}/>
                                {/* <Route  path="people/:id" element={<PersonDetails/>}/>
                                <Route  path="ship/:id" element={<ShipDetails/>}/>         
                                <Route  path='planet/:id' element={<PlanetDetails/>}/>   */}
                            </Route>
                        </Routes>
                        
                </BrowserRouter>
            </Provider>
            
        )
    }
}
