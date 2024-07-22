import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../moduls/user";
import { UserService } from "../../Table/Service/AlluserService";


export const getAllUserAction:any=createAsyncThunk("User/getAllUserAction",
async(payload:{},{rejectWithValue}):Promise<IUser[] |any>=>{
    
    try{
 
        let res=await UserService.getAlluser();
        console.log("action",res)
        return res.data
       } 
       catch(error:any){
       
        if(!error.res){
          throw error
        }
        
        return rejectWithValue(error.res.data)
    }
}
) 

export const getAdminAction: any = createAsyncThunk(
    "User/getAdminAction",


    async (payload: {}, { rejectWithValue }): Promise<IUser | any> => {

        try {
            let res = await UserService.getAllAdmin()
            return res.data

        }
        catch (error: any) {

            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data);
        }
    }

)

export const getFacultyAction: any = createAsyncThunk(
    "User/getFacultyAction",


    async (payload: {}, { rejectWithValue }): Promise<IUser | any> => {

        try {
            let res = await UserService.getAllFaculty()
            return res.data

        }
        catch (error: any) {

            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data);
        }
    }

)


// export const getActiveAction: any = createAsyncThunk(
//     "User/getActiveAction",


//     async (payload: {}, { rejectWithValue }): Promise<IUser | any> => {

//         try {
//             let res = await UserService.getActiveuser()
//             return res.data

//         }
//         catch (error: any) {

//             if (!error.res) {
//                 throw error

//             }
//             return rejectWithValue(error.res.data);
//         }
//     }

// )


export const getStudentsAction: any = createAsyncThunk(
    "User/getFacultyAction",


    async (payload: {}, { rejectWithValue }): Promise<IUser | any> => {

        try {
            let res = await UserService.getAllStudents()
            return res.data

        }
        catch (error: any) {

            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data);
        }
    }

)


export const getActiveuserAction: any = createAsyncThunk(
    "User/getActiveuserAction",


    async (payload: {}, { rejectWithValue }): Promise<IUser | any> => {

        try {
            let res = await UserService.getActiveuser()
            return res.data

        }
        catch (error: any) {

            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data);
        }
    }

)

// export const getStudentsAction: any = createAsyncThunk(
//     "User/getStudentsAction",


//     async (payload: {}, { rejectWithValue }): Promise<IUser| any> => {

//         try {
//             let res = await UserService.getAllStudents()
//             return res.data

//         }
//         catch (error: any) {

//             if (!error.res) {
//                 throw error

//             }
//             return rejectWithValue(error.res.data);
//         }
//     }

// )


export const getOneUserbyidAction:any=createAsyncThunk("User/getOneUserbyidAction",
async(payload:{id:string},{rejectWithValue}):Promise<IUser|any>=>{
    
    try{
        
        const {id}=payload
        let res=await UserService.getOneuserbyid(id)
        return res.data
    }catch(error:any){
       
        if(error.res){
          throw error
        }
        
        return rejectWithValue(error.res.data)
    }
}
)  

export const createusertAction:any=createAsyncThunk("User/createuserAction",
async(payload:{body:IUser},{rejectWithValue}):Promise<IUser[]|any>=>{
    
    try{
        
        const { body }=payload
        let res=await UserService.createuser(body);
        return res.data
    }catch(error:any){
       
        if(error.res){
          throw error
        }
        
        return rejectWithValue(error.res.data)
    }
}
)  

export const DeactivateUserAction: any = createAsyncThunk(
    "Table/DeactivateUserAction",


    async (payload: { id: string }, { rejectWithValue }): Promise<IUser[] | any> => {

        try {
            const { id } = payload

            let res = await UserService.DeactiveUser(id)
            return res.data

        }
        catch (error: any) {

            if (!error.res) {
                throw error

            }
            return rejectWithValue(error.res.data);
        }
    }

)

