import React from 'react';
import {useDispatch} from "react-redux";
import {Day} from "../../redux/Slices/daysForecastSlice";
import {Link} from "react-router-dom";


const Nav = ({forecast}) => {

    const dispatch = useDispatch()
    const daysForecast = ['/','/hourly','/daily']
    const buttons = ['На сегодня', 'На 5 дней', 'На 16 дней']
    function dayReset(){
        dispatch(Day(0))
    }

     function handlerChange  (days,index){
        dispatch(Day(index))
    }

    return (
        <nav className="nav">
            <ul className="nav__list">
                {daysForecast.map((days,index)=>
                    <Link className='link' key={days}  to={days}>
                <li
                    className='nav__item'
                    onClick={()=>handlerChange(days,index)}>
                    <button className={
                        ['button','nav__button',(index===forecast)?'nav__button-active':''].join(' ')}
                    >
                        {buttons.at(index)}
                    </button>
                </li>
                    </Link>
                )}

            </ul>
            <Link to='/'>
            <button onClick={dayReset} className='nav__button button'>Отменить</button>
            </Link>
        </nav>
    );
};

export default Nav;