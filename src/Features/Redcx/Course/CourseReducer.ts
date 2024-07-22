import { createSlice } from "@reduxjs/toolkit"
import { Icourse } from "../../Moduls/Course" 
import * as CourseAction from "../Course/CourseAction"


  
export const CourseFeatureKey ="CourseKey"
 
 export interface InitialState {
     courses: Icourse[],    
     course: Icourse      
 }
 
 const initailstate: InitialState = {
     courses: [] as Icourse[],
     course: {} as Icourse,
 }
 
 export const CourseSlice = createSlice({
     name: "CourseSlice",
     initialState: initailstate,
 
     reducers: {},
     extraReducers: (builder) => {  
    
     //  get all user 
       builder.addCase(CourseAction.getAllCourseAction.fulfilled, (state, action) => {
        state.courses = action.payload
    }
    )
             // get by id 
    builder.addCase(CourseAction.getOneCoursebyidAction .fulfilled, (state, action) => {
        state.courses = action.payload
    }
    )

// creteuser 
    builder.addCase(CourseAction.createCourseAction.fulfilled, (state, action,) => {
        state.courses = action.payload
    }
    )

   builder.addCase(CourseAction.updateCourseAction.fulfilled, (state, action,) => {
    state.courses = action.payload
}
 )

builder.addCase(CourseAction.deleteCourseAction.fulfilled, (state, action,) => {
    state.courses = action.payload
}
 )

     }


    })


export function getActiveAction(): any {
    throw new Error('Function not implemented.')
}
export function getAllUserAction(): any {
    throw new Error('Function not implemented.')
}

