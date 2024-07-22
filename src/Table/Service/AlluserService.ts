
import axios from "axios";

import { IUser } from "../../moduls/user";

export class UserService {
 
  // comman url 
  private static ServiceUrl ="https://developerschool-backend.onrender.com/api/v1"
  static getAllUser: any


  //  getall users ///

  public static getAlluser = ():Promise<{data: IUser[]}> => {
    const result = `${this.ServiceUrl}/users`
    return axios.get(result);

  }

  public static getAllAdmin = ():Promise<{data: IUser}> => {
    const result = `${this.ServiceUrl}/admin`
    return axios.get(result); 

  }
  
  public static getAllFaculty = ():Promise<{data: IUser}> => {
    const result = `${this.ServiceUrl}/faculties;`
    return axios.get(result);
  }
 
  

  public static getAllStudents=():Promise<{data:IUser}>=>{
    const result=`${this.ServiceUrl}/students`
    return axios.get(result);
  }

  

  // getonebyid 
  public static getOneuserbyid = (id: string): Promise<{ data: IUser }> => {
    const result = `${this.ServiceUrl}/users/${id}`
    return axios.get(result);

  }
  
  public static createuser = (body: IUser): Promise<{ data: IUser[] }> => {
    const result = `${this.ServiceUrl}/users/add`

    // axios.post(data, body).then((res) => console.log(res)).catch((err) => console.log(err));

    // return axios.post(data, body)
    
    return axios.post(result, body);

  }
//   // updatecontact
  public static updateuser = (body: IUser, id: string): Promise<{ data: IUser }> => {
    const result = `${this.ServiceUrl}/update/${id}`
    return axios.put(result, body);

  }
//   // delete used 
  public static deletecuser = (id: string): Promise<{ data:{}}> => {
    const result = `${this.ServiceUrl}/delete/${id}`
    return axios.put(result);
    

  }

// Activeuser 
  // public static getActiveuser = ():Promise<{data: IUser[]}> => {
  //   const result = `${this.ServiceUrl}/users/isactive`
  //   return axios.get(result);

  // } 
  public static getActiveuser =():Promise<{data:IUser}> =>{
    const result =`${this.ServiceUrl}/users/isactive`
    return axios.get(result)
  }


  public static DeactiveUser = (id: string): Promise<{ data: {} }> => {
    const data = `${this.ServiceUrl}/users/deactivate/${id}`;
    return axios.put(data)

    }

}
 


