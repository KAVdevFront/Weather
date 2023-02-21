import React, {memo} from 'react';


import WeatherLeft from "./WeatherLeft";
import WeatherRight from "./WeatherRight";
import {WeatherAPI} from "../../../services/WeatherService";
import ErrorComponent from "../../ErrorComponent";
import MySpinner from "../../MySpinner";

const Weather = memo(({debounceSearch}) => {

    const {data,isLoading,isError} = WeatherAPI.useFetchCurrentWeatherQuery(debounceSearch)

    return (
        <div className="main__top main-weather">
            {isError ? <ErrorComponent/>:
            (isLoading)
                ?
                <MySpinner/>
                :
                <>
                    <WeatherLeft initWeather={data}/>
                    <WeatherRight initWeather={data}/>
                </>
             }
        </div>
    );
})

export default Weather;