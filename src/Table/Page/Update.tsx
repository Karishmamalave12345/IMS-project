import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from '../../Components/Form/Form';
import Button from 'react-bootstrap/esm/Button';
import { link } from 'fs';

import * as UserAction from "../../Redux/User/UserAction"
import { AppDispatch } from '../../Redux/Store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export interface updatedata {
    firstname: string,
    lastname: string,
    contact: string,
    address: string,
    qulification: string,
    email: string,
    
}
interface UpdateUserProps {
  userId: number;
}

const Update: React.FC<UpdateUserProps> = ({userId}) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [update, setupdate] = useState<updatedata>({
 
    firstname: "",
    lastname: "",
    contact: "",
    address: "",
    qulification: "",
    email: "",
   
  })


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setupdate({
      ...update,
      [e.target.name]: e.target.value,

    });
  };

  const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("submit");
  }

  const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("reset");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = async (userId: number) => {
    console.log(`Deactivating user with ID: ${userId}`);
    dispatch(UserAction.DeactivateUserAction({ id: userId.toString() })).then((res: any) => {
      if (res && !res.error) {
        console.log('User deactivated successfully:', res);
        navigate("/tabledata"); 
        alert("deactivated successfully") ;
      }
      
       else {
        console.error('Error deactivating user:', res.error);
      }
    });
      };
  return (
    <>
      {/* <footer className="card-footer justify-content-center">
         <button className="btn btn-primary" onClick={handleShow}></button>
      </footer> */}
      <td>
        <Button className='mx-3' onClick={handleShow}>Update</Button>
        <Button className='btn btn-primary' onClick={()=>deleteUser(userId)}>delete</Button>
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-dark text-light'>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <div className=''>
          <Modal.Body className='pt-0 bg-light text-dark'>
            <div className="div">
              <div className="row">
                <div className=" col-6 mb-3 pb-5">

                  <Form heading={''} button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }} textInput={[
                    {
                      type: "firstname",
                      name: "firstname",
                      value: update.firstname,
                      label: "FirstName:",
                      placeholder: "Enter your name",
                      onChange: handleChangeInput
                    }, 

                    
                    {
                      type: "lastname",
                      name: "lastname",
                      value: update.lastname,
                      label: "Last Name:",
                      placeholder: "Enter your lastname",
                      onChange: handleChangeInput
                    },
                   
                      {
                        type: "email",
                        name: "email",
                        value: update.email,
                        label: "Email",
                        placeholder: "Enter your email",
                        onChange: handleChangeInput
                      },
                    

      
                  ]} 

                  dropdown={[]} />
                </div>

                <div className='col-6 mb-5'>
                  <Form heading={''} button={{ type: 'submit', onClick: FormReset, text: "Reset" }}  
                  textInput={[

                    {
                      type: "number",
                      name: "contact",
                      value: update.contact,
                      label: "Contact No.",
                      placeholder: "Enter your number",
                      onChange: handleChangeInput

                    },
                    {
                      type: "address",
                      name: "address",
                      value: update.address,
                      label: "Address",
                      placeholder: "Enter your address",
                      onChange: handleChangeInput
                    },
    
                    {
                      
                     type: "text",
                    name: "qulification",
                    value: update.qulification,
                    label: "Qulification",
                    placeholder: "Enter your qulification",
                    onChange: handleChangeInput
                  },


                  ]} radioInput={[]} dropdown={[

                  
                  ]} />


                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Update;
 





