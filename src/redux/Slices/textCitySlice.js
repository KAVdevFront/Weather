import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    text:''
}
export const textCitySlice=createSlice({
    name:'textCity',
    initialState,
    reducers:{
        inputCity:(state,action)=>{
            state.text = action.payload
            console.log(state.text)
        }
    }

})
export const {inputCity} = textCitySlice.actions
export default textCitySlice.reducer


