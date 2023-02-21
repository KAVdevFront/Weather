import React from 'react';
import {WeatherAPI} from "../../../services/WeatherService";
import ErrorComponent from "../../ErrorComponent";
import MySpinner from "../../MySpinner";



export default function TodayWeather ({debounceSearch})  {

    const {data,isLoading,isError} = WeatherAPI.useFetchCurrentWeatherQuery(debounceSearch)

    return (
        <div className="forecast__cards">
            {isError ? <ErrorComponent/>:
                (isLoading)
            ?
            <MySpinner/>
            :
        <div className='todayWeather-block tw'>
            <div className="tw__row row">
                Время восхода-{data.data.at(0).sunrise}
            </div>
            <div className="tw__row row">
                Время заката-{data.data.at(0).sunset}
            </div>
            <div className="tw__row row">
                Скорость ветра-{data.data.at(0).wind_spd} м/с
            </div>
            <div className="tw__row row">
                Относительная влажность-{data.data.at(0).rh} %
            </div>
            <div className="tw__row row">
                Облачность-{data.data.at(0).clouds} %
            </div>
            <div className="tw__row row">
                Видимость-{data.data.at(0).vis} км
            </div>
        </div>
            }
        </div>

    );
}
