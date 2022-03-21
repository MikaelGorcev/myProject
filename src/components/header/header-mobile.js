import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import RandomPlanet from "../random-planet/random-planet";
import "./header-mobile.css";

const HeaderMobile = ({ changeContent, swapiServis }) => {
  const [resAnimation, setAnimation] = useState(false);
  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  const goForward = () => navigation(1);

  const refInput = useRef();
  const reflinkBlock_mobile = useRef();
  const animatedX = () => {
    setAnimation(!resAnimation);
    !resAnimation
      ? (reflinkBlock_mobile.current.style.maxHeight = "250px")
      : (reflinkBlock_mobile.current.style.maxHeight = "0");
  };

  return (
    <>
      <nav className="header-mobile bg-dark">
        <div className="headerContainer-mobile">
          <h1 className="title-mobile">
            Test service for picture or StarWars{" "}
            <span style={{ fontSize: "14px" }}>when will their API work</span>
          </h1>
          <div className="buttonBlock-mobile">
            <button className="toggle" onClick={goBack}>
              Назад
            </button>
            <button className="toggle">
              <Link to="/" className="a">
                Домой
              </Link>
            </button>
            <button className="toggle" onClick={goForward}>
              Вперед
            </button>
            <button className="toggle" onClick={changeContent}>
              чик-чик
            </button>
          </div>
        </div>
        <div className="menu-container-mobile">
          <input type="checkbox" id="check-menu" ref={refInput} />

          <div className="menuLine ">
            <label htmlFor="check-menu" style={{ position: "absolute" }}>
              <div onClick={animatedX} className="burgerLineContainer">
                <Transition in={resAnimation} timeout={300}>
                  {(resAnimation) => (
                    <div className={`burger-line b1 ${resAnimation}`}></div>
                  )}
                </Transition>
                <Transition in={resAnimation} timeout={300}>
                  {(resAnimation) => (
                    <div className={`burger-line b2 ${resAnimation}`}></div>
                  )}
                </Transition>
                <Transition in={resAnimation} timeout={300}>
                  {(resAnimation) => (
                    <div className={`burger-line b3 ${resAnimation}`}></div>
                  )}
                </Transition>
                <Transition in={resAnimation} timeout={300}>
                  {(resAnimation) => (
                    <div className={`burger-line b4 ${resAnimation}`}></div>
                  )}
                </Transition>
              </div>
            </label>
            <div className="menu__label-mobile">MENU</div>
          </div>

          <ul className="linkBlock-mobile" ref={reflinkBlock_mobile}>
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
              <Link to="sec-page">А секретная страничка</Link>
            </li>
            <li>
              <Link to="login-page">логИнова страница</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <RandomPlanet swapiServis={swapiServis} />
    </>
  );
};

export default HeaderMobile;
