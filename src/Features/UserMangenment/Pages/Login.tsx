import React, { useState } from 'react'
import Form from '../../../Components/Form/Form';
import { Ilogin } from '../Modals/FormModuls';

import { Link, useNavigate } from 'react-router-dom';
import { IMSService, } from '../Services/Service';
import { Console } from 'console';
import useAuth from '../../../hook/useAuth';
import { url } from 'inspector';


const Login: React.FC = () => {


  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [login, setLogin] = useState<Ilogin>({
    email: "",
    password: ""
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,

    });

  };

  const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // console.log();
    alert("submit");


    IMSService.userLogin(login).then((result) => {
      // if (result && result.data && result.data == "user not found") {
      //   alert("login sucessfuly")
      //   navigate('/login')
      // }
      // else if (result && result.data && result.data.email) {
      //   alert('login failed')
      //   console.log(result)
     
      // }

      if(result && result.data && result.data.email && result.data.password){
        console.log(result)
        navigate('/course')
        alert('login sucessfuly')
      }else{
        alert('login Failed')
      }

      setAuth({
        user: result.data,
        accessToken: result.data?.token,
        role: result.data?.role_id

      })
     
    })
    

    //   ImpService.createLogin(login).then((email) => {
    //   if (email && email.data) {
    //     navigate('/login')
    //   }
    // })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // var username="suraj@gmail.com" 
    // var password="password12"


    // if(username=="suraj@gmail.com" && password=="password12")
    // {
    //   console.log("sucessfully logged")
    // }

    // else{
    //   console.log("not sucessfully")
    // }


  }



  // ImpService.createLogin(login).then((email) => {
  //   if (email && email.data) {
  //     navigate('/login')
  //   }
  // })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // var username="suraj@gmail.com" 
  // var password="password12"


  // if(username=="suraj@gmail.com" && password=="password12")
  // {
  //   console.log("sucessfully logged")
  // }

  // else{
  //   console.log("not sucessfully")
  // }


  return (
    <>
      <div className="container">
        
        <div className="row justify-content-center mb-5">
          <div className="col-10  mb-5 ">
            {/* <div className="card"> */}
            {/* <div className="col-10 bg-light shadow mb-5 mx-5"> */}

            <Form heading={'Login'}

              //  button={{ type: "submit", onClick: FormSubmit, text: "Sign In" }} 
              textInput={[
                {
                  type: "email",
                  name: "email",
                  value: login.email,
                  onChange: handleChangeInput,
                  label: "Email",
                  placeholder: 'Enter your Email'
                },



                {
                  type: "password",
                  name: "password",
                  value: login.password,
                  onChange: handleChangeInput,
                  label: "Password",
                  placeholder: 'enter your password'
                }
              ]}


              button={{ type: "submit", onClick: FormSubmit, text: "Login" }} radioInput={[]} dropdown={[]} />

            <p className='d-flex justify-content-left mx-4 my-3'><Link to='/Forget'>Forward password ? </Link>

            </p>

            <span>new here ? <Link to='/Register'>New Register</Link></span>

          </div>
        </div>
      </div>
      {/* 
      </div> */}
    </>
  )
}

export default Login



