import React from "react";
import { BlockItemText } from "../item-details/item-details";
import { PlanetList, PlanetDetails } from "../sw-components/index";
import { useState } from "react";
import EmptyComponent from "../empty-component/emptyComponent";
import { Route, Routes } from "react-router-dom";
import ErrorCompon from "../error-view/error-view";
import "./element-block.css";
const PlanetBlock = () => {
  const [planetId, setPlanetId] = useState(null);

  const idSelectPlanet = (id) => {
    setPlanetId(id);
  };

  return (
    <div className="element-block">
      <ErrorCompon>
        <PlanetList idSelect={idSelectPlanet} />
      </ErrorCompon>
      <Routes>
        <Route path={"details"} element={<EmptyComponent anyId={planetId} />} />
        <Route
          path={"details/:id"}
          element={
            <ErrorCompon>
              <PlanetDetails selectedItem={planetId}>
                <BlockItemText label="имя" field="name" />
                <BlockItemText label="население" field="population" />
                <BlockItemText label="имя" field="rotationPeriod" />
                <BlockItemText label="диаметр" field="diameter" />
              </PlanetDetails>
            </ErrorCompon>
          }
        />
      </Routes>
    </div>
  );
};

export default PlanetBlock;
