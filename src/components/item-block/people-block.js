import React from "react";
import { BlockItemText } from "../item-details/item-details";
import { PersonList, PersonDetails } from "../sw-components/index";
import ErrorCompon from "../error-view/error-view";
import { Routes, Route } from "react-router-dom";
import EmptyComponent from "../empty-component/emptyComponent";
import "./element-block.css";
export default class PeopleBlock extends React.Component {
  state = { personId: null };

  idSelectPerson = (id) => {
    this.setState({ personId: id });
  };

  componentWillUnmount() {
    this.setState({ personId: null });
  }

  render() {
    return (
      <div className="element-block">
        <ErrorCompon>
          <PersonList idSelect={this.idSelectPerson} />
        </ErrorCompon>
        <ErrorCompon>
          <Routes>
            <Route
              path={"details"}
              element={<EmptyComponent anyId={this.state.personId} />}
            />
            <Route
              path={"details/:id"}
              element={
                <PersonDetails selectedItem={this.state.personId}>
                  <BlockItemText field="name" label="имя" />
                  <BlockItemText field="gender" label="пол" />
                  <BlockItemText field="birthYear" label="дата рождения" />
                  <BlockItemText field="eyeColor" label="цвет глаз" />
                </PersonDetails>
              }
            />
          </Routes>
        </ErrorCompon>
      </div>
    );
  }
}
