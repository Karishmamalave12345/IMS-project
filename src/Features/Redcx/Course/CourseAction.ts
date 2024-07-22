import { createAsyncThunk } from "@reduxjs/toolkit";
import { Icourse } from "../../Moduls/Course";
import { CourseService } from "../../Services/Service";




// export const getAllCourseAction:any=createAsyncThunk("Course/getAllCourseAction",
// async(payload:{},{rejectWithValue}):Promise<Icourse[] |any>=>{
    
//     try{
 
//         let res=await CourseService.getAllcourse();
//         console.log("action",res)
//         return res.data
//        } 
//        catch(error:any){
       
//         if(!error.res){
//           throw error
//         }
        
//         return rejectWithValue(error.res.data)
//     }
// }
// ) 
export const getAllCourseAction: any = createAsyncThunk(

    //folder name & action 

    "Course/getAllCourseAction ",

    async (payload: {}, { }): Promise<Icourse[] | any> => {
        try {
            let res = await CourseService.getAllCourse();
            console.log("action", res);
            return res.data;
        }
        catch (error: any) {
            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data)
        }

    }
)


export const getOneCoursebyidAction:any=createAsyncThunk("Course/getOneCoursebyidAction",
async(payload:{id:string},{rejectWithValue}):Promise<Icourse|any>=>{
    
    try{
        
        const {id}=payload
        let res=await CourseService.getOneCoursebyid(id)
        return res.data
    }catch(error:any){
       
        if(error.res){
          throw error
        }
        
        return rejectWithValue(error.res.data)
    }
}
)  

export const createCourseAction:any=createAsyncThunk("Course/createCourseAction",
async(payload:{body:Icourse},{rejectWithValue}):Promise<Icourse[]|any>=>{
    
    try{
        
        const { body }=payload
        let res=await CourseService.createCourse(body);
        return res.data
    }catch(error:any){
       
        if(error.res){
          throw error
        }
        
        return rejectWithValue(error.res.data)
    }
}
)  


export const updateCourseAction:any=createAsyncThunk("Course/updateCourseAction",
    async(payload:{body:Icourse,id:string},{rejectWithValue}):Promise<Icourse|any>=>{
        
        try{
            
            const {body,id }=payload
            let res=await CourseService.updateCourse(body,id);
            return res.data
        }catch(error:any){
           
            if(error.res){
              throw error
            }
            
            return rejectWithValue(error.res.data)
        }
    }
    )  
    export const deleteCourseAction:any=createAsyncThunk("Course/deleteCourseAction",
        async(payload:{id:string},{rejectWithValue}):Promise<Icourse|any>=>{
            
            try{
                
                const {id}=payload
                let res=await CourseService.deleteCourse(id);
                return res.data
            }catch(error:any){
               
                if(error.res){
                  throw error
                }
                
                return rejectWithValue(error.res.data)
            }
        
        
        
        }
        )  



function rejectWithValue(data: any): any {
    throw new Error("Function not implemented.");
}







