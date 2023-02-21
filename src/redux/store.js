import {configureStore} from "@reduxjs/toolkit";
import textCityReducer from './Slices/textCitySlice'
import daysForecastReducer from './Slices/daysForecastSlice'
import {WeatherAPI} from "../services/WeatherService";


const store = configureStore({
    reducer:{
        textCity:textCityReducer,
        daysForecast:daysForecastReducer,
        [WeatherAPI.reducerPath]:WeatherAPI.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(WeatherAPI.middleware)
});

export default store