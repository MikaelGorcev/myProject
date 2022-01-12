import React from "react";
import { Link,useNavigate, Outlet} from "react-router-dom";
import RandomPlanet from "../random-planet/random-planet";
import './header.css'
const Header = ({changeContent,swapiServis})=>{
    const navigation = useNavigate()
    const goBack=()=>navigation(-1);
    const goForward=()=>navigation(1)
    return(
        <>
            <nav className='header bg-dark' >
                <h1>Справочник звездных войн</h1>
                    <div className="blBlock">
                        <div className="buttonBlock">
                            <button className="toggle" onClick={goBack}>Назад</button>
                            <button className="toggle"><Link to="/">Домой</Link></button>
                            <button className="toggle" onClick={goForward}>Вперед</button>
                        </div>
                        <ul className="linkBlock">
                            <li><Link to="people/details">Персонажи</Link></li>
                            <li><Link to="ship/details">Корабли</Link></li>
                            <li><Link to="planet/details">Планеты</Link></li>
                            <li><Link to="sec-page">А секретная страничка</Link></li>
                            <li><Link to="login-page">ЛогИнова страница</Link></li>
                        </ul>
                    </div>
                <button className="toggle chik" onClick={changeContent}>чик-чик</button>
            </nav> 
            <RandomPlanet swapiServis={swapiServis}/> 
            <Outlet/>
        </> 
    )
};

export default Header;
