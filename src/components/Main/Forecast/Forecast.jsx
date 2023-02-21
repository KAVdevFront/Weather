import React from 'react';
import TodayWeather from "./TodayWeather";
import {Route, Routes} from "react-router-dom";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const Forecast = ({forecast,debounceSearch}) => {
    return (
        <div className="forecast__block">
            <Routes>
                <Route path='/' element={<TodayWeather debounceSearch={debounceSearch}/>}/>
                <Route path='/hourly' element={<HourlyForecast debounceSearch={debounceSearch} forecast={forecast}/>}/>
                <Route path='/daily' element={<DailyForecast debounceSearch={debounceSearch} forecast={forecast}/>}/>
            </Routes>
        </div>
    );
};

export default Forecast;