import React from 'react';


const WeatherLeft = ({initWeather}) => {
        const date = new Date()


        return (

            <div className="main-weather__left left">
                <div className="left__block">
                    <div className="left__temperature">
                        {Math.round(initWeather.data[0].max_temp)
                            ||
                            Math.round(initWeather.data[0].temp)}°C
                    </div>
                    <div className="left__date">Сегодня</div>
                    <div className="left__time">Время: {date.getHours()}:{date.getMinutes()}</div>
                    <div className="left__city">Город:{initWeather.data[0].city_name} </div>
                    <img
                        src={require(`../../../assets/Main-top/weather-icons/${initWeather.data.at(0).weather.icon}.png`)}
                        alt="left__img" className="left__img"/>
                </div>
            </div>
        );

}




export default WeatherLeft;