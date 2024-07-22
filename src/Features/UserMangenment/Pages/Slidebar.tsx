import React from 'react'
import { Link } from 'react-router-dom'

const Slidebar = () => {
  return (
    <> 
     <div className="sidebar bg-secnodary">
       <ul className=""> 

       <li>
        <Link to={'/admindata'}>
       <i className="bi bi-person-circle"></i>Admin</Link>
       </li>

       <li>
        <Link to={'course'}><i className="bi bi-book-half"></i>Course</Link>
        </li>

       {/* <i className="bi bi-book-half"></i>Course</li> */}
       <li> 
       <i className="bi bi-graph-up-arrow"></i>Revenue</li>
       <li> 
       <i className="bi bi-currency-rupee"></i>Income</li>
       <li>
       <i className="bi bi-currency-exchange"></i>Expensive</li>
  
      <li>
       <i className="bi bi-graph-up-arrow"></i>User Role</li>
      <li>
       <Link to={'/tabledata'}>
       <i className="bi bi-people-fill"></i> All User</Link>
       </li>
      

       <li>
        {/* <Link to={'/adduser'}> */}
       <i className="bi bi-people-fill"></i>All Entrolled User 
       {/* </Link> */}
       </li> 
       
       <li>
       {/* <Link to={'/allactive'}> */}
       <i className="bi bi-people-fill"></i>All Active User 
       {/* </Link> */}
       </li>

       <li>Salary Annexues</li>
       <li> 
       <i className="bi bi-calendar2-check"></i>Attendance Record</li>
       <li> 
       <i className="bi bi-calculator-fill"></i>Payroll Processing</li>
       <li> 
       <i className="bi bi-envelope-fill"></i>Releving Letter</li>
       <li>  
       <i className="bi bi-envelope-fill"></i>Offer Letter</li>
       <li> 

        {/* <Link to={'/coursedata'}>  */}
       <i className="bi bi-graph-up-arrow"></i>Available Courses 
       {/* </Link>  */}
       </li>

       <li> 
       <i className="bi bi-graph-up-arrow"></i>Faculity</li>
       <li> 
       <i className="bi bi-graph-up-arrow"></i>Entrollment</li>
       
       </ul>
    
       
       </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Slidebar