import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

import Register from './Features/UserMangenment/Pages/Register';
import Login from './Features/UserMangenment/Pages/Login';
import Forget from './Features/UserMangenment/Pages/Forget';
import About from './Features/UserMangenment/Pages/About';
import Contact from './Features/UserMangenment/Pages/Contact';
import Signout from './Features/UserMangenment/Pages/Signout';
import Radio from './Components/Radio';
import Footer from './Footer/Footer';
import Slidebar from './Features/UserMangenment/Pages/Slidebar';
import Layout from './Features/UserMangenment/Pages/Layout';
// import Card from './Components/Card/Card';
import Course from './Features/Pages/Course';
import EnrollmentForm from './Features/Pages/EnrollmentForm';
import ProtectedRoute from './Authorizetion/ProtectedRoute';
import { UserRole } from './Utils/RolesEnum';
import { Table } from 'react-bootstrap';

import TableData from './Table/TableData';
import CourseData from './Features/Redcx/Course/Page/CourseData';
import Admin from './Features/UserMangenment/Pages/Admin';
import Update from './Features/Redcx/Course/Page/Update';
import Admindata from './Features/Redcx/Course/Page/Admindata';






// import TableHeading from './Table/TableHeading';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        
        <Routes>
         
          <Route path='/' element={<Login/>} />
      
          <Route path='/Contact' element={<Contact />}></Route>

          <Route path='/about' element={<About />}></Route>

          <Route path='/Signout' element={<Signout />}></Route>

          <Route path='/forget' element={<Forget />}></Route>

          <Route path='/Register' element={<Register />}></Route>

          <Route path='/' element={<Layout/>}>
{ 
            <Route element={<ProtectedRoute allowedRoles={[
              UserRole.ADMIN,
              UserRole.FACULTY,
              UserRole.STUDENT
            ]} />} /> }

            <Route path='/course' element={<Course/>}></Route>
         
          <Route path='/tabledata' element={<TableData/>}></Route>
           
         <Route path='/coursedata'  element={<CourseData/>}></Route>
          
          <Route path='/admindata' element={<Admindata/>}></Route>
          
      
          </Route>
          
          {/* </Route> */}



        </Routes>
      
      </BrowserRouter>






    </div>


  );
}

export default App;

