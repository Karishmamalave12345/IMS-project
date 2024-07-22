
import React, { useState } from 'react'
import Form from '../../../Components/Form/Form';
import { Link } from 'react-router-dom';
import { Ilogin } from '../Modals/FormModuls';


const Login = () => {
  const [forget, setforget] = useState<Ilogin>({
    email: "",
    password: ""
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setforget({
      ...forget,
      [e.target.name]: e.target.value,

    });
  };

  const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("submit");
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col bg-light shadow">
            {/* <div className="card"> */}



              <Form heading={'ForgetPassword'} 

            //  button={{ type: "submit", onClick: FormSubmit, text: "Sign In" }} 
            textInput={[
              {
                type: "email",
                name: "email",
                value: forget.email,
                onChange: handleChangeInput,
                label: "Email",
                placeholder: 'Enter your email'
              },



              {
                type: "password",
                name: "password",
                value: forget.password,
                onChange: handleChangeInput,
                label: "Password",
                placeholder: 'enter your password'
              }
            ]}


            button={{ type: "submit", onClick: FormSubmit, text: "reset" }} radioInput={[]} dropdown={[]}   />

             
            </div>
          </div>
        </div>
{/* 
      </div> */}
    </>
  )
}

export default Login
