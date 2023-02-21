import React from 'react';
import {WeatherAPI} from "../../../services/WeatherService";
import Card from "./Card";
import ErrorComponent from "../../ErrorComponent";
import MySpinner from "../../MySpinner";



const DailyForecast = ({debounceSearch,forecast}) => {
    const {data,isLoading,isError} = WeatherAPI.useFetchInitWeatherQuery(debounceSearch)
    console.log('daily render')
    return (
        <div className="forecast__cards">
            {isError ? <ErrorComponent/>:
                (isLoading)
                ?
                <MySpinner/>
                :
                <>
                    {data.data?.map(day =>
                        <Card key={day.datetime} forecast={forecast} day={day}/>)}
                </>}
        </div>
    );
}


export default DailyForecast;