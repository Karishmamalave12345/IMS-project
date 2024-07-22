import React from 'react'
import Slidebar from './Slidebar'
import Header from '../../../Header/Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../../Footer/Footer'
import Course from '../../Pages/Course'

const Layout = () => {
  return (
    <>
      {/* Layout  */}
      <div>
        <Header />
        <div className="row">
          <div className=" flex col-2">
            <Slidebar />
          </div>

        
      
          <div className="col-10">
            <Outlet/>
           
          </div>

          <Footer />

        </div>
      </div>






    </>
  )
}

export default Layout