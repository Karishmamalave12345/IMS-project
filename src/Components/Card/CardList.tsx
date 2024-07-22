 
 
//  import React from 'react'
// import { ICard } from '../../Features/UserMangenment/Modals/FormModuls'
// import EnrollmentForm from '../../Features/Pages/EnrollmentForm'



// const CardList: React.FC<ICard> = (props) => {

 
//     return (
//         <>
        
//             <div className='card'>
//                 <img src={props.imgage} alt="" />
//                 <div className="card-body text-center">
//                     <h4 className="card-title">{props.title}</h4>
//                     <p className="card-text">Course Duration:-{props.duration}</p>
//                     <p className="card-text">Course Fee:-{props.fees}</p>
//                 </div>
                

          
// <EnrollmentForm imgage={''} title={props.title} duration={''} fees={props.fees} button={''}/>
//         {/* <Addcourse imgage={''} title={'props.title'} duration={''} fees={''} button={'props.fees'}/>
//               */}
//                 {/* {btn && (
  
//                     <footer className="card-footer justify-content-center ">
//                         <button className="btn btn-primary"  >{btn}</button>
//                     </footer>
//                 )} */}
//             </div>

//         </>
//     )
// }

// export default CardList 



import React from 'react';
import EnrollmentForm from '../../Features/Pages/EnrollmentForm';


interface Icourse {
  course_id: string;
  course_name: string; 
  course_duration: string;
  course_fees: string; 
  fees:string
 title:string
  
  
}

const CardList: React.FC<Icourse> = ({course_id,course_name,course_duration,course_fees}) => {
  return (
   
    <div className="card">
      <div className="card-body">
        <img src='' alt=''/>
        <h5 className="card-title">{course_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {course_id}</h6>
        <p className="card-text">Duration: {course_duration}</p>
        <p className="card-text">Fees: {course_fees}</p>
       
        {/* <div className="card-actions">
          <button type='button' className='btn btn-primary mx-2'>Update</button>
          <button type='button' className='btn btn-danger'>Delete</button>
        </div> */}
        
        <EnrollmentForm  course_id={course_id} course_name={course_name} course_duration={course_duration} course_fees={course_fees} image={'image'} title={course_name} fees={course_fees} />
        
      </div>
    </div>
    
  );
};

export default CardList
