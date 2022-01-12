import React from "react";
import Header from '../header/header';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import TestService from "../../services/test-service";
import SwapiService from "../../services/swapi-service";
import {Provider} from "../swapi-service-context/swapi-service-context";
import PeopleBlock from "../item-block/people-block";
import PlanetBlock from "../item-block/planet-block";
import ShipBlock from "../item-block/ship-block";
import SecPage from "../pages/sec-page";
import LoginPage from "../pages/login-page";
import './app.css';




export default class App extends React.Component {
    

    state={
        logged:false,
        swapiServis:new TestService(),
    }
    

    onLogin=()=>{
        this.setState({logged:true})
    }

    contentChange=()=>{
        this.setState(({swapiServis})=>{
            const Service=swapiServis instanceof SwapiService?TestService:SwapiService;
            console.log(Service.name);
            return {swapiServis:new Service()}
        })
    }


    
    
    
    render(){
       
  console.log(this.state);
        return (
            <Provider value={this.state.swapiServis}>
                <BrowserRouter>
                
                    
                   
                        <Routes>
                            <Route path="/" element={
                                <Header changeContent={this.contentChange} swapiServis={this.state.swapiServis}/> }>
                                    <Route path="/sec-page" element={<SecPage logged={this.state.logged} />} />
                                    <Route path="/login-page" element={<LoginPage logged={this.state.logged} onLogin={this.onLogin}/>} />
                                    <Route  path="people/*" element={<PeopleBlock/>}/>
                                    <Route  path="ship/*" element={<ShipBlock/>}/>
                                    <Route  path="planet/*" element={<PlanetBlock/>}/>
                                
                            </Route>
                        </Routes>
                        
                </BrowserRouter>
            </Provider>
            
        )
    }
}
