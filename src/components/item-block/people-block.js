import React from "react";
import {BlockItemText} from '../item-details/item-details';
import {PersonList,PersonDetails} from '../sw-components/index';
import ErrorCompon from "../error-view/error-view";
import { Routes,Route } from "react-router-dom";

export default class PeopleBlock extends React.Component{
    state={personId:null};

    idSelectPerson=(id)=>{
        this.setState({personId:id});
    };

    render(){
        return(
            <div className='d-flex justify-content-between'>
            <ErrorCompon>   
            <PersonList idSelect={this.idSelectPerson} />
            </ErrorCompon>
            <ErrorCompon>
                <Routes>
                    <Route path={"details/:id"} element={
                <PersonDetails selectedItem={this.state.personId}>
                    <BlockItemText field='name' label='имя'/>
                </PersonDetails>
                    }/>
                    </Routes>
            </ErrorCompon>
        </div>
        )
    }
}