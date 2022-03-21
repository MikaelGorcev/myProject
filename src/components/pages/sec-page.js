import React from "react";
import { Navigate } from "react-router-dom";
const SecPage = ({ logged }) => {
  if (logged) {
    return (
      <div>
        <h3>Вот тебе и регистрация</h3>
      </div>
    );
  }
  return <Navigate to="/login-page" replace />;
};

export default SecPage;
