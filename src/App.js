import Header from './components/Header'
import Main from './components/Main/Main'
import './App.css';
import './Fonts/Fonts.css'

import React from "react";
import {useSelector} from "react-redux";
import {useDebounce} from "./hooks/debounce";





function App() {
    const inputText = useSelector((state)=>state.textCity.text)
    const debounceSearch = useDebounce(inputText,600)
  return (
    <div className="app">
        <Header/>
        {(debounceSearch.length < 2)
            ? <div></div> :
            <>
            <Main/>
            </>
        }
    </div>
  );
};

export default App;
