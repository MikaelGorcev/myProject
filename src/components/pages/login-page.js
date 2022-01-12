import React from "react";

const LoginPage = ({logged,onLogin})=>{
    return (
        <div>
            <p>Залогинься чтобы чтото увидеть</p>
            <button onClick={onLogin}>Логин</button>
        </div>
    )
};

export default LoginPage;