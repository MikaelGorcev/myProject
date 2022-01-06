import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const whithChildList = (Wrapper,child)=>{

return (props)=>{

    return (
            <Wrapper {...props}>
               {child }
            </Wrapper>
           )
        }

}
const name = (item)=>item.name;
const model = (item)=><span>{item.model}</span>
 
const mapSwapiServicePeople= (swapiService)=>{
   return {dataItem:swapiService.getAllPeople}
}
const mapSwapiServicePlanets= (swapiService)=>{
   return {dataItem:swapiService.getAllPlanets}
}
const mapSwapiServiceShips= (swapiService)=>{
   return {dataItem:swapiService.getAllShips}
}
const PersonList = withSwapiService(mapSwapiServicePeople)(withData(whithChildList(ItemList,name)));
const PlanetList =  withSwapiService(mapSwapiServicePlanets)(withData(whithChildList(ItemList,name)));
const ShipList =  withSwapiService(mapSwapiServiceShips)(withData(whithChildList(ItemList,model)));

export{PersonList, PlanetList, ShipList};