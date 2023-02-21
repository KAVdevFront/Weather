import React from 'react';
import Weather from "./Weather/Weather";
import Nav from "./Nav";
import Forecast from "./Forecast/Forecast";
import {useSelector} from "react-redux";
import {useDebounce} from "../../hooks/debounce";




const Main = () => {
    const forecast = useSelector(state=>state.daysForecast.days)
    const inputText = useSelector((state)=>state.textCity.text)
    const debounceSearch = useDebounce(inputText,600)
    return (
        <div className='main'>
            <div className="container">
                <Weather debounceSearch={debounceSearch}/>
                    <div className="main__bottom forecast">
                        <Nav  forecast={forecast} />
                        <Forecast debounceSearch={debounceSearch} forecast={forecast} />
                    </div>

                </div>
            </div>

    );
};

export default Main;
