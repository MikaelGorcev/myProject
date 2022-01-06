import React from "react";
import {BlockItemText} from '../item-details/item-details';
import {ShipList,ShipDetails} from '../sw-components/index';
import ErrorCompon from "../error-view/error-view";

export default class ShipBlock extends React.Component{
    state={shipId:null};
        idSelectShip=(id)=>{
        this.setState({shipId:id});
    };

    

    render(){
        return(
            <div className='d-flex justify-content-between'>
            <ErrorCompon>
            <ShipList idSelect={this.idSelectShip} />
            </ErrorCompon>
            <ErrorCompon>
            <ShipDetails selectedItem={this.state.shipId}>   
                    <BlockItemText field='name' label='имя'/>
            </ShipDetails>
            </ErrorCompon>
            </div>
        
        )
    }
}