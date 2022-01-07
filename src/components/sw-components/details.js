import ItemDetails from "../item-details/item-details";
import { Consumer } from "../swapi-service-context/swapi-service-context";
import { useParams } from "react-router-dom";




const PersonDetails = ({selectedItem,children})=>{
    
    
    return(
            <Consumer>
                {
                    ({getPerson,getPersonImage})=> {
                        return(
                            <ItemDetails selectedItem={selectedItem} 
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
    const {id} = useParams();
    return(
        <Consumer>
            {
            ({getPlanet,getPlanetImage})=>{
                return(
                    <ItemDetails selectedItem={selectedItem ?? id} 
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
    
    return(
        <Consumer>
            {
                ({getShip,getShipImage})=> {
                    return(
                        <ItemDetails selectedItem={selectedItem} 
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