import { promises } from "dns";
import axios from "axios";
import { Ilogin } from "../Modals/FormModuls";
import { IUser } from "../../../moduls/user";


export class IMSService {
    static createuser(body: IUser) {
      throw new Error("Method not implemented.");
    }
    
    

    private static serviceURL: string = "https://developerschool-backend.onrender.com/api/v1/urole"

    public static userLogin(body: Ilogin): Promise<{ data: any}>  
    
    {
        const res = `${this.serviceURL}/userlogin`
        return axios.post(res, body);
    }




}