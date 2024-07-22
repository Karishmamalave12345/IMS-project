 
 import { combineReducers, combineSlices } from "@reduxjs/toolkit"

 
 import * as UserReducer from "../Redux/User/UserReducer"

 const RootReducer=combineReducers({ 
    [UserReducer.userFeatureKey]:UserReducer.UserSlice.reducer
 }) 
 
 export default RootReducer;  

 
