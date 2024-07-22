
import React, { useState } from 'react'
import Form from '../../../Components/Form/Form'
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState, useAppDispatch } from '../../../Redux/Store';
import * as UserReducer from '../../../Redux/User/UserReducer';
import { useSelector } from 'react-redux';
import * as UserAction from '../../../Redux/User/UserAction';

export interface Iregistration{
    address :string,
        caste_category: string,
        contact: string,
        dob: string,
        email: string,
        first_name:string,
        gender:string,
        last_name:string,
        passing_year: string,
        password: string,
        qualification: string,
         subcaste:string,
}

const Registration :React.FC= () => {

    //use navigare

    const navigate=useNavigate()

    const dispatch:AppDispatch = useAppDispatch()

    //configue store
    
    const UserState: UserReducer.InitialState = useSelector((state: RootState) => {

        return state[UserReducer.userFeatureKey]
    })

    const [registration, setRegistration] = useState<Iregistration>({
        
         
        address:"",
        caste_category: "",
        contact: "",
        dob: "",
        email: "",
        first_name:"",
        gender: "",
        last_name: "",
        passing_year: "",
        password: "",
        qualification: "",
         subcaste:"",

    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>) => {
        setRegistration({
          ...registration,
          [e.target.name]: e.target.value,
    
        });
      };

      function toSnakeCase(str: string): string {
        return str.replace(/[A-Z]/g, letter => '_${letter.toLowerCase()}');
    }

    function transformKeysToSnakeCase(obj: any): any {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => transformKeysToSnakeCase(item));
        }

        return Object.keys(obj).reduce((acc, key) => {
            const snakeKey = toSnakeCase(key);
            acc[snakeKey] = transformKeysToSnakeCase(obj[key]);
            return acc;
        }, {} as any);
    }

    const FormSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        alert("submit");
        const snakeCasedUser = transformKeysToSnakeCase(registration);
        console.log('Transformed User:', snakeCasedUser);

        try {
            const formatDate = (dateString: string) => {
                const [year, month, day] = dateString.split('-');
                return `${day}-${month}-${year}`;
            };
            if (snakeCasedUser.dob) {
                snakeCasedUser.dob = formatDate(snakeCasedUser.dob);
            }
            e.preventDefault();
            dispatch(UserAction.createusertAction({body:registration})).then((res:any)=>{
    
                if(
                    res && !res.error
                ){
                    navigate('/tabledata')
                }
            })
            const res = await dispatch(UserAction.createusertAction({ body: snakeCasedUser })).unwrap();
            console.log('Submission Response:', res);
            

         }
          catch (error) {
             console.error('Error submitting form:', error);
        }
    }


      const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        alert("reset");
      }

  return (
    <div className="container  mt-2 py-5">
    <div className="row justify-content-center bg-light shadow">
        <h3 className='text-primary'>Registration</h3>
      <div className=" col-6" >

<Form  heading={''} button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }}
                  textInput={[
                      {
                          type: "text",
                          name: "first_name",
                          value: registration.first_name,
                          label: "First Name:",
                          placeholder: "Enter your name",
                          onChange: handleChangeInput
                      },

                      {
                          type: "text",
                          name: "last_name",
                          value: registration.last_name,
                          label: "Last Name",
                          placeholder: "Enter your lastname",
                          onChange: handleChangeInput
                      },
                      {
                          placeholder: 'Enter Date of birth',
                          type: 'date',
                          value: registration.dob,
                          name: 'dob',
                          label: "Date Of Birth",
                          onChange: handleChangeInput
                      },
                      {
                          type: "email",
                          name: "email",
                          value: registration.email,
                          label: "Email",
                          placeholder: "Enter your email",
                          onChange: handleChangeInput
                      },
                      {
                          type: "number",
                          name: "contact",
                          value: registration.contact,
                          label: "Contact",
                          placeholder: "Enter your number",
                          onChange: handleChangeInput,
                      },
                  ]} radioInput={[
                    {
                        type: "radio",
                        name: "gender",
                        value: "male",
                        label: "Male",
                        onChange: handleChangeInput,
                        checked: registration.gender === "male",
                        
                    },
                    {
                        type: "radio",
                        name: "gender",
                        value: "female",
                        label: "Female",
                        onChange: handleChangeInput,
                        checked: registration.gender === "female",
                        
                    },
                    {
                        type: "radio",
                        name: "gender",
                        value: "other",
                        label: "Other",
                        onChange: handleChangeInput,
                        checked: registration.gender === "other",
                        
                    }

                  ]} dropdown={[]} /> 
        </div>

        <div className='col-6'>
           <Form heading={''} button={{ type: 'reset', onClick: FormReset, text: "Reset" }}
                  textInput={[
                      {
                          type: "address",
                          name: "address",
                          value: registration.address,
                          label: "Address",
                          placeholder: "Enter your address",
                          onChange: handleChangeInput
                      },
                      {
                          type: "text",
                          name: "qualification",
                          value: registration.qualification,
                          label: "Qulification",
                          placeholder: "Enter your qulification",
                          onChange: handleChangeInput
                      },
                      {
                          type: "number",
                          name: "passing_year",
                          value: registration.passing_year,
                          label: "Passing Year",
                          placeholder: "Enter your passing Year",
                          onChange: handleChangeInput
                      },
                      {
                          type: "text",
                          name: "subcaste",
                          value: registration.subcaste,
                          label: "sub-cast",
                          placeholder: "Enter your subcast",
                          onChange: handleChangeInput
                      },

                      {
                        type: "password",
                        name: "password",
                        value: registration.password,
                        label: "password",
                        placeholder: "",
                        onChange: handleChangeInput
                    },
                    {
                     type: "text",
                     name: "caste_category",
                    value: registration.caste_category,
                    label: "caste_category",
                    placeholder: "",
                    onChange: handleChangeInput 
                    }
                    

                  ]} radioInput={[]}
                  
                  dropdown={[
                    
                  ]} />
          
        </div>
        </div>
        </div>

  )
}

export default Registration



