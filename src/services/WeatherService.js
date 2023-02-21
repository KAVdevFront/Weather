import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
const headers = {
    'X-RapidAPI-Key': 'db19c067d5msh51b646d9ac1218fp18fc98jsnb85373f5f245',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
}



export const WeatherAPI = createApi({
    reducerPath:'weatherAPI',
    baseQuery:fetchBaseQuery({baseUrl:'https://weatherbit-v1-mashape.p.rapidapi.com/'}),
    endpoints:(build)=> ({
        fetchInitWeather:build.query({
            query:(city)=>({
                url: 'forecast/daily',
                params: {city:`${city}`, lang: 'ru'},
                headers
            }),

        }),
        fetchHourlyWeather:build.query({
            query:(city)=>({
                url: 'forecast/3hourly',
                params: {city:`${city}`, lang: 'ru'},
                headers
            }),

        }),
        fetchCurrentWeather:build.query({
            query:(city)=>({
                url:'current',
                params: {city:`${city}`, lang: 'ru'},
                headers
            })
        })
    })
})

