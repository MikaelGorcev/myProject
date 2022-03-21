import React from "react";
import Header from "../header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleBlock from "../item-block/people-block";
import PlanetBlock from "../item-block/planet-block";
import ShipBlock from "../item-block/ship-block";
import SecPage from "../pages/sec-page";

import LoginPage from "../pages/login-page";
import "./app.css";

export default class App extends React.Component {

 
  render() {
    return (
      // <Provider value={this.state.swapiServis}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                changeContent={this.props.contentChange}
                swapiServis={this.props.swapiServis}
              />
            }
          >
            <Route
              path="/sec-page"
              element={<SecPage logged={this.props.logged} />}
            />
            <Route
              path="/login-page"
              element={
                <LoginPage
                  logged={this.props.logged}
                  onLogin={this.props.onLogin}
                />
              }
            />
            <Route path="people/*" element={<PeopleBlock />} />
            <Route path="ship/*" element={<ShipBlock />} />
            <Route path="planet/*" element={<PlanetBlock />} />
          </Route>
        </Routes>
      </BrowserRouter>
      // </Provider>
    );
  }
