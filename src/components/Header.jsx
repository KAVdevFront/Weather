import React from 'react';
import Logo from '../assets/Header/Logo.svg'
import Drop from '../assets/Header/drop.svg'
import {useDispatch,useSelector} from "react-redux";
import {inputCity} from "../redux/Slices/textCitySlice";

const Header = () => {
    const inputText = useSelector((state)=>state.textCity.value)
    const dispatch = useDispatch()
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__block">
                        <div className="header__logo">
                            <img src={Logo} alt="header__icon" className="header__icon"/>
                            <div className="header__title">React weather</div>
                        </div>
                        <div className="header__city">
                            <img src={Drop} alt="" className="header__drop"/>
                            <form action="" className="header__form">
                                <input
                                    value={inputText}
                                    type='text'
                                    placeholder='Введите город'
                                    className="header__input"
                                    onChange={(e)=>dispatch(inputCity(e.target.value.toLowerCase()))}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;