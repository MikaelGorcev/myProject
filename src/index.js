import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import App from "./components/app/app";
import MobileApp from "./components/app/mobile-app";
import TestService from "./services/test-service";
import SwapiService from "./services/swapi-service";
import { Provider } from "./components/swapi-service-context/swapi-service-context";
import "./bootstrap.min.css";
import "./style.css";

const RootOfApp = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [service, setService] = useState(new TestService());
  const [logged, setLogin] = useState(false);

  const contentChange = () => {
    setService((swapiServis) => {
      const Service =
        swapiServis instanceof SwapiService ? TestService : SwapiService;
      return setService(new Service());
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  }, []);

  return size > 500 ? (
    <Provider value={service}>
      <App
        swapiServis={service}
        contentChange={contentChange}
        logged={logged}
        onLogin={onLogin}
      />
    </Provider>
  ) : (
    <Provider value={service}>
      <MobileApp
        swapiServis={service}
        contentChange={contentChange}
        logged={logged}
        onLogin={onLogin}
      />
    </Provider>
  );
};

ReactDOM.render(
  <div className="container" style={{ paddingBottom: "20px" }}>
    <RootOfApp />
  </div>,
  document.getElementById("root")
);
