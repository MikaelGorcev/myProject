import React from "react";
import { Link,useNavigate, Outlet} from "react-router-dom";
import './header.css'
const Header = ({changeContent})=>{
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
                    <li><Link to="people">Персонажи</Link></li>
                    <li><Link to="ship">Корабли</Link></li>
                    <li><Link to="planet">Планеты</Link></li>
                    {/* <li><Link to="planet/1">Детали</Link></li> */}
                    <button className="toggle" onClick={goForward}>Вперед</button>
                </ul>
                <button className="toggle" onClick={changeContent}>чик-чик</button>
            </nav>  
            <Outlet/>
        </> 
    )
};

export default Header;
