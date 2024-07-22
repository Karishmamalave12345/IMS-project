import React from "react";



export interface Iforget {
  email: string,
  password: string
}

export interface Ilogin {
  email: string,
  password: string
}

export interface IButton{
    type:"button" | "submit" | "reset" 
    onClick:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
    text:string;
  }

export interface ITextInput {
    placeholder: string;
    type: string,
    value: string,
    name: string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    label?: string

}[]
export interface ILabel {
    text: string | undefined
}

export interface IForm {
    heading: string,
    button: IButton,
    textInput: ITextInput[];
    radioInput?:IRedio[];
    dropdown?:IDropdown[] 
    
}

export interface IDropdown {
  name: string,
  value: string,
  label?: string,

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

// export interface Igender {
//     male: "";
//     female: ""
//     other: ""
//   }



  
  // export interface Iradio{
  //   type:string,
  //   value:string,
  //   name:string,
  //   label?:string,
  //   onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  
  
  // } 

  export interface IRedio{
    type:string,
    name:string,
    value:string,
    label?:string,
    checked:boolean
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    } 

     
    export interface IRegister {
      
      // other: string;
      // female:string;
      // male: string;
      // firstname: string,
      // lastname: string,
      // contact: string,
      // address: string,
      // year: string,
      // qulification: string,
      // birth: string,
      // caste: string,
      // subcast: string,
      // email: string,
      // option1:string 
      // option2:string 
      // option3:string
      
      first_name: string,
      last_name: string,
      email: string,
      contact: string,
      address: string,
      qualification: string,
      passing_year: string,
      dob: string,
      gender: string,
      caste_category: string,
      subcaste: string,
      creation_ts: string,
      updation_ts: string,
      created_by: string,
      updated_by: string,
      is_active: string,
      role_id: string,
      
  }

 
// export interface Icard {
//   image: string;
//   fees: string;
//   duration: string;
//   heading: string,
//   // button: IButton,
//   card:Icard[]
// }

// export interface ICard{
//   imgage:string,
//   title:string,
//   duration:string,
//   fees:string,
//   button:string,
//   } 


 export interface Icourse{
  course_id: string;
  course_name: string;
  course_duration: string;
  course_fees: string;
fees:string 
title:string
 
 }

  
  export interface cardInfo{
      
  // card:ICard[]
card:Icourse[]

 
  }

  

  
 