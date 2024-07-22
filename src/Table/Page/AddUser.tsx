// import React, { useState } from 'react'
// import Form from '../../Components/Form/Form'
// import * as UserAction from "../../Redux/User/UserAction"
// import * as UserReducer from "../../Redux/User/UserReducer"
// import { Button, Modal } from 'react-bootstrap'
// import { AppDispatch, RootState } from '../../Redux/Store'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { IUser } from '../../moduls/user'

// // interface AddData {
// //     first_name: string,
// //     last_name: string,
// //     email: string,
// //     contact: string,
// //     address: string
// //     qualification: string

// // }

// const AddUser: React.FC = () => {

//   const nevaigate = useNavigate() //one page nevigate to another page navigatehook used 

//   // dispatch method  
//   const dispatch: AppDispatch = useDispatch()

//   // store congi 
//   const UserSate: UserReducer.InitialState = useSelector((state: RootState) => {
//     return state[UserReducer.userFeatureKey]

//   }
//   )
//   const [Add, setAdd] = useState<IUser>({

//     first_name: "",
//     last_name: "",
//     email: "",
//     contact: "",
//     address: "",
//     qualification: "",
//     passing_year: "",
//     dob: "",
//     gender: "",
//     caste_category: "",
//     subcaste: "",
//     creation_ts: "",
//     updation_ts: "",
//     created_by: "",
//     updated_by: "",
//     is_active: "",
//     role_id: "", 
//     password:"" ,
//     user_id :"" ,
    
//   })


//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => {
//     setAdd({
//       ...Add,
//       [e.target.name]: e.target.value,

//     });
//   };

 

//   const snakeToCamel = (obj: IUser) => {
//     const camelCaseObj: any = {};
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
//         camelCaseObj[camelCaseKey] = (obj as any)[key];

//       }
//     }
//     return camelCaseObj;
//   };


//   const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();

//     const camelCaseData = snakeToCamel(Add);
//     console.log(camelCaseData)

//     dispatch(UserAction.createusertAction({ body: camelCaseData })).then((res: any) => {
//       if (res && !res.error) {
//         nevaigate('/tabledata');
//       }
//     });
//     alert("Submit");
//   };


//   const SubmitDataToFrom = (event: React.FormEvent<HTMLElement>) => {
//     event.preventDefault()
// }

//   // const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//   //   e.preventDefault();
//   //   alert("reset");
//   // }

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   return (
//     <>
//       {/* <footer className="card-footer justify-content-center">
//          <button className="btn btn-primary" onClick={handleShow}></button>
//       </footer> */}
//       <td>
//         <Button className='mx-3 my-3' onClick={handleShow}>ADD +</Button>

//       </td>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton className='bg-dark text-light'>
//           <Modal.Title>ADD User</Modal.Title>
//         </Modal.Header>
//         <div className=''>
//           <Modal.Body className='pt-0 bg-light text-dark'>
//             <div className="div">
//               <div className="row">
//                 <div className=" col-6 mb-3 pb-5">

//                   <Form heading={''} button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }}


//                     textInput={[
//                       {
//                         type: "firstname",
//                         name: "first_name",
//                         value: Add.first_name,
//                         label: "FirstName:",
//                         placeholder: "Enter your name",
//                         onChange: handleChangeInput,

//                       },

//                       {
//                         type: "lastname",
//                         name: "last_name",
//                         value: Add.last_name,
//                         label: "Last Name:",
//                         placeholder: "Enter your lastname",
//                         onChange: handleChangeInput
//                       },
//                       {
//                         placeholder: 'Enter your Email',
//                         type: 'email',
//                         value: Add.email,
//                         name: 'email',
//                         label: "Email",
//                         onChange: handleChangeInput
//                       },

//                       {
//                         placeholder: 'Enter Date of birth',
//                         type: 'date',
//                         value: Add.dob,
//                         name: 'dob',
//                         label: "Date Of Birth",
//                         onChange: handleChangeInput
//                       },

                      
//                         {
//                             placeholder: 'Enter gender',
//                             type: 'text',
//                             value: Add.gender,
//                             name: 'gender',
//                             label: "gender",
//                             onChange: handleChangeInput
//                           },
    
                      
                    
//                     ]} radioInput={[

//                     //   {
//                     //     type: "radio",
//                     //     name: "gender",
//                     //     value: Add.male,
//                     //     label: "Male",
        
//                     //     onChange: handleChangeInput
//                     //   },
//                     //   {
//                     //     type: "radio",
//                     //     name: "gender",
//                     //     value: Add.female,
//                     //     label: "Female",
        
//                     //     onChange: handleChangeInput
//                     //   }, {
//                     //     type: "radio",
//                     //     name: "gender",
//                     //     value: Add.other,
//                     //     label: "Other",
        
//                     //     onChange: handleChangeInput
//                     //   },
//                     ]} />
//                 </div>

//                 <div className='col-6 mb-5'>
//                   <Form heading={''}  button={{ type: 'submit', onClick: SubmitDataToFrom, text: "cancel" }}

//                     textInput={[

//                       {
//                         type: "number",
//                         name: "contact",
//                         value: Add.contact,
//                         label: "Contact No.",
//                         placeholder: "Enter your number",
//                         onChange: handleChangeInput

//                       },
//                       {
//                         type: "address",
//                         name: "address",
//                         value: Add.address,
//                         label: "Address",
//                         placeholder: "Enter your address",
//                         onChange: handleChangeInput
//                       },

//                       {

//                         type: "text",
//                         name: "qualification",
//                         value: Add.qualification,
//                         label: "Qulification",
//                         placeholder: "Enter your qulification",
//                         onChange: handleChangeInput
//                       },
//                       {

//                         type: "text",
//                         name: "passing_year",
//                         value: Add.passing_year,
//                         label: "passing",
//                         placeholder: "Enter your qulification",
//                         onChange: handleChangeInput
//                       },

//                       {
//                           type: "text",
//                           name: "caste_category",
//                           value: Add.caste_category,
//                           label: "caste_category",
//                           // placeholder: "Enter your qulification",
//                           onChange: handleChangeInput,
//                           placeholder: ''
//                       }



//                     ]} radioInput={[]} 
                    
//                     dropdown={[

//                     //   {
//                     //     name: "",
//                     //     value: Add.caste_category,
//                     //     // label: "caste category",
//                     //     onChange: handleChangeInput
//                     //   },

//                     // {
//                     //     // type: "text",
//                     //     name: "caste_category",
//                     //     value: Add.caste_category,
//                     //     label: "caste_category",
//                     //     // placeholder: "Enter your qulification",
//                     //     onChange: handleChangeInput
//                     // }


//                     ]} />

//                 </div>
//               </div>
//             </div>
//             <Modal.Footer className='bg-light d-flex justify-content-start'>
//           {/* <Button onClick={SubmitDataToFrom} className='mx-4'>Submit</Button>
//           <Button onClick={FormSubmit}>Reset</Button> */}
//         </Modal.Footer>

//           </Modal.Body>
//         </div>
//       </Modal>
//     </>
//   );
// }
// export default AddUser;

export {
  
}


