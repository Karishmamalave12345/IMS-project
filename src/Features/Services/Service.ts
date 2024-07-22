
import axios from "axios";

import { Icourse } from "../Moduls/Course";

export class CourseService {
 
  // comman url 
  private static ServiceUrl ="https://developerschool-backend.onrender.com/api/v1/course2"
  static getAllcourse: any

  //  getall users ///

  public static getAllCourse = ():Promise<{data: Icourse[]}> => {
    const result = `${this.ServiceUrl}/get`
    return axios.get(result);

  }
//   

  // getonebyid 
  public static getOneCoursebyid = (id: string): Promise<{ data: Icourse }> => {
    const result = `${this.ServiceUrl}/getById/${id}`
    return axios.get(result);

  }
  
  public static createCourse = (body: Icourse): Promise<{ data: Icourse[] }> => {
    const result = `${this.ServiceUrl}/post`

    // axios.post(result, body).then((res) => console.log(res)).catch((err) => console.log(err));

    
    
    return axios.post(result, body);

  }
//   // updatecontact
  public static updateCourse = (body: Icourse, id: string): Promise<{ data: Icourse }> => {
    const result = `${this.ServiceUrl}/update/${id}`
    return axios.put(result, body);

  }
//   // delete used 
  public static deleteCourse = (id: string): Promise<{ data:{}}> => {
    const result = `${this.ServiceUrl}/delete/${id}`
    return axios.delete(result);
    

  }


}
 


