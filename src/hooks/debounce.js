import {useEffect, useState} from "react";

export function useDebounce  (text,delay){
    const [debounce,setDebounce]=useState(text)
    useEffect(()=>{
        const bd = setTimeout(()=>{
            setDebounce(text)
        },delay)
        return ()=>{
            clearTimeout(bd)
        }
    },[text,delay])
    return debounce
}
