import React from "react";
import { BlockItemText } from "../item-details/item-details";
import { ShipList, ShipDetails } from "../sw-components/index";
import ErrorCompon from "../error-view/error-view";
import { Route, Routes } from "react-router-dom";
import EmptyComponent from "../empty-component/emptyComponent";
import "./element-block.css";
export default class ShipBlock extends React.Component {
  state = { shipId: null };
  idSelectShip = (id) => {
    this.setState({ shipId: id });
  };

  render() {
    return (
      <div className="element-block">
        <ErrorCompon>
          <ShipList idSelect={this.idSelectShip} />
        </ErrorCompon>
        <ErrorCompon>
          <Routes>
            <Route
              path={"details"}
              element={<EmptyComponent anyId={this.state.shipId} />}
            />
            <Route
              path={"details/:id"}
              element={
                <ShipDetails selectedItem={this.state.shipId}>
                  <BlockItemText field="name" label="название" />
                  <BlockItemText field="model" label="модель" />
                  <BlockItemText field="manufacturer" label="производство" />
                  <BlockItemText field="length" label="размер" />
                  <BlockItemText field="crew" label="экипаж" />
                  <BlockItemText field="passengers" label="вместимость" />
                </ShipDetails>
              }
            />
          </Routes>
        </ErrorCompon>
      </div>
    );
  }
}
