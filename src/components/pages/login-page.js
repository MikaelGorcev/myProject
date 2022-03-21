import { Navigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./form.css";
const LoginPage = ({ logged, onLogin }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("В почте надо что-то написать");
  const [emailDirty, setEmailDirty] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(
    "Тут надо что-то написать"
  );
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(String(e.target.value).toLowerCase())
      ? setEmailError("")
      : setEmailError("неправильно");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("не меньше 3, не больше 8");
      if (!e.target.value) {
        setPasswordError("не должно быть пусто");
      }
    } else setPasswordError("");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  if (!logged) {
    return (
      <>
        <p style={{ fontSize: "24px" }}> Ну ты залогинься для начала</p>
        <div className="formForValid">
          <form onSubmit={onLogin}>
            <h2>Вдруг зарегаешься</h2>
            {emailDirty && emailError && <div>{emailError}</div>}
            <input
              onChange={(e) => emailHandler(e)}
              value={email}
              onPointerLeave={(e) => blurHandler(e)}
              name="email"
              type="text"
              placeholder="Введи свою почту"
            />
            {passwordDirty && passwordError && <div>{passwordError}</div>}
            <input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onPointerLeave={(e) => blurHandler(e)}
              name="password"
              type="password"
              placeholder="Введи свой пароль...ага щас..."
            />
            <button disabled={!formValid} type="submit" className="toggle ">
              Зарегаться
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return <Navigate to="/sec-page" replace />;
  }
};

export default LoginPage;
