import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    days:0
}
export const daysForecastSlice=createSlice({
    name:'daysForecast',
    initialState,
    reducers:{
        Day:(state,action)=>{

            state.days = action.payload
        }
    }

})
export const {Day} = daysForecastSlice.actions
export default daysForecastSlice.reducer