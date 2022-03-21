import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import RandomPlanet from "../random-planet/random-planet";
import "./header.css";
const Header = ({ changeContent, swapiServis }) => {
  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  const goForward = () => navigation(1);

  return (
    <>
      <nav className="header bg-dark">
        <div className="headerContainer ">
          <h1>
            Test service for picture or StarWars{" "}
            <span style={{ fontSize: "14px" }}>when will their API work</span>
          </h1>
          <div className="buttonBlock">
            <button className="toggle" onClick={goBack}>
              Назад
            </button>
            <button className="toggle">
              <Link className="a" to="/">
                Домой
              </Link>
            </button>
            <button className="toggle" onClick={goForward}>
              Вперед
            </button>
          </div>
          <button className="toggle" onClick={changeContent}>
            чик-чик
          </button>
        </div>
        <ul className="linkBlock">
          <li>
            <Link to="people/details" className="a">
              Персонажи
            </Link>
          </li>
          <li>
            <Link to="ship/details" className="a">
              Корабли
            </Link>
          </li>
          <li>
            <Link to="planet/details" className="a">
              Планеты
            </Link>
          </li>
          <li>
            <Link to="sec-page" className="a">
              А секретная страничка
            </Link>
          </li>
          <li>
            <Link to="login-page" className="a">
              ЛогИнова страница
            </Link>
          </li>
        </ul>
      </nav>

      <RandomPlanet swapiServis={swapiServis} />
      <Outlet />
    </>
  );
};

export default Header;
