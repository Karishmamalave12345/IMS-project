import { createSlice } from "@reduxjs/toolkit"
 import * as userAction from"../User/UserAction"
import { IUser } from "../../moduls/user"
  
export const userFeatureKey ="userKey"
 
 export interface InitialState {
     users: IUser[],    
     user: IUser      
 }
 
 const initailstate: InitialState = {
     users: [] as IUser[],
     user: {} as IUser,
 }
 
 export const UserSlice = createSlice({
     name: "UserSlice",
     initialState: initailstate,
 
     reducers: {},
     extraReducers: (builder) => {  
    
     //  get all user 
       builder.addCase(userAction.getAllUserAction.fulfilled, (state, action) => {
        state.users = action.payload
    }
    )
             // get by id 
    builder.addCase(userAction.getOneUserbyidAction .fulfilled, (state, action) => {
        state.users = action.payload
    }
    )

// creteuser 
    builder.addCase(userAction.createusertAction.fulfilled, (state, action,) => {
        state.users = action.payload
    }
    )

  
   builder.addCase(userAction.DeactivateUserAction.fulfilled, (state, action) => {
    state.user = action.payload

        })

     }


    })

