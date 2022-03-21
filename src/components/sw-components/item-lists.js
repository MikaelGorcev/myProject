import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const whithChildList = (Wrapper, child) => {
  return (props) => {
    return <Wrapper {...props}>{child}</Wrapper>;
  };
};
const name = (item) => item.name;
const model = (item) => <span>{item.model}</span>;
//const abort=(swapiService)=>({abort:swapiService.controller})
const mapSwapiServicePeople = (swapiService) => {
  return {
    getDataSetItemsFromSwapi: swapiService.getAllPeople,
    abort: swapiService.onAbort,
  };
};
const mapSwapiServicePlanets = (swapiService) => {
  return {
    getDataSetItemsFromSwapi: swapiService.getAllPlanets,
    abort: swapiService.onAbort,
  };
};
const mapSwapiServiceShips = (swapiService) => {
  return {
    getDataSetItemsFromSwapi: swapiService.getAllShips,
    abort: swapiService.onAbort,
  };
};

//withAbortSwapiServiceShips(mapSwapiServicePeople,mapSwapiServicePlanets,mapSwapiServiceShips)

const PersonList = withSwapiService(mapSwapiServicePeople)(
  withData(whithChildList(ItemList, name))
);
const PlanetList = withSwapiService(mapSwapiServicePlanets)(
  withData(whithChildList(ItemList, name))
);
const ShipList = withSwapiService(mapSwapiServiceShips)(
  withData(whithChildList(ItemList, model))
);

export { PersonList, PlanetList, ShipList };
