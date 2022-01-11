import ItemDetails from "../item-details/item-details";
import { Consumer } from "../swapi-service-context/swapi-service-context";
import { useParams } from "react-router-dom";




const PersonDetails = ({selectedItem,children})=>{
    const param = useParams().id
    
    return(
            <Consumer>
                {
                    ({getPerson,getPersonImage})=> {
                        return(
                            <ItemDetails selectedItem={selectedItem || param} 
                            getData={getPerson} 
                            dataImage={getPersonImage}>
                            {children}
                            </ItemDetails>
                            )
                        }
                }
            </Consumer>
        )
};
const PlanetDetails = ({selectedItem,children})=>{
    const param = useParams().id
    
    return(
        <Consumer>
            {
            ({getPlanet,getPlanetImage})=>{
                return(

                    <ItemDetails selectedItem={selectedItem ||param} 
                    getData={getPlanet} 
                    dataImage={getPlanetImage}>
                    {children}
                    </ItemDetails>
                    )
                }
            }
        </Consumer>
        )
};
const ShipDetails = ({selectedItem,children})=>{
    const param = useParams().id
    return(
        <Consumer>
            {
                ({getShip,getShipImage})=> {
                    return(
                        <ItemDetails selectedItem={selectedItem || param}  
                        getData={getShip} 
                        dataImage={getShipImage}>
                        {children}
                        </ItemDetails>
                        )
                    }
            }
        </Consumer>
    )
};


export{PersonDetails, PlanetDetails, ShipDetails};