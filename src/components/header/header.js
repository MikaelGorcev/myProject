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
                
                <ul>
                    <button className="toggle" onClick={goBack}>Назад</button>
                    <button className="toggle" ><Link to="/">Домой</Link></button>
                    <li><Link to="people/details">Персонажи</Link></li>
                    <li><Link to="ship/details">Корабли</Link></li>
                    <li><Link to="planet/details">Планеты</Link></li>
                    {/* <li><Link to="planet/1">Детали</Link></li> */}
                    <button className="toggle" onClick={goForward}>Вперед</button>
                </ul>
                <button className="toggle" onClick={changeContent}>чик-чик</button>
            </nav> 
            <RandomPlanet swapiServis={swapiServis}/> 
            <Outlet/>
        </> 
    )
};

export default Header;
