 
 import { combineReducers, combineSlices } from "@reduxjs/toolkit"


 import * as CourseReducer from "../Redcx/Course/CourseReducer"

 const RootReducer=combineReducers({ 
    [CourseReducer.CourseFeatureKey]:CourseReducer.CourseSlice.reducer
 }) 
 
 export default RootReducer;  

 
