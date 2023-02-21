import React from 'react';
import cloud from "../../../assets/Main-top/cloud.svg";
import temp from "../../../assets/Main-top/temp.svg";
import pressure from "../../../assets/Main-top/pressure.svg";
import precip from "../../../assets/Main-top/precip.svg";
import wind from "../../../assets/Main-top/wind.svg";
import Spinner from "react-bootstrap/Spinner";

const WeatherRight = ({initWeather}) => {
    return (
        <div className="main-weather__right right">
            <img src={cloud} alt="" className="right__background-img"/>
            <div className="right__block">
                <div className="right__content">
                    <div className="right__row row-temperature">
                        <div className="row-temperature__img row__img">
                            <img src={temp} alt=""/>
                        </div>
                        <div className="row-temperature__title">Температура</div>
                        <div className="row-temperature__description">{initWeather.data[0].max_temp||initWeather.data[0].temp}° - ощущается как {initWeather.data[0].app_max_temp||initWeather.data[0].app_temp}°</div>
                    </div>
                    <div className="right__row row-pressure">
                        <div className="row-pressure__img row__img">
                            <img src={pressure} alt=""/>
                        </div>
                        <div className="row-pressure__title">Давление</div>
                        <div className="row-pressure__description">{Math.round(initWeather.data[0].pres)} мм ртутного столба - нормальное</div>
                    </div>

                    <div className="right__row row-precipitation">
                        <div className="row-precipitation__img row__img">

                            <img src={precip} alt=""/>
                        </div>
                        <div className="row-precipitation__title">Осадки</div>
                        <div className="row-precipitation__description">{(initWeather.data[0].precip==0)?'Без осадков':initWeather.data[0].precip}</div>
                    </div>
                    <div className="right__row row-wind">
                        <div className="row-wind__img row__img">
                            <img src={wind} alt=""/>
                        </div>
                        <div className="row-wind__title">Ветер</div>
                        <div className="row-wind__description">{initWeather.data[0].wind_spd} м/с {initWeather.data[0].wind_cdir_full}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeatherRight;