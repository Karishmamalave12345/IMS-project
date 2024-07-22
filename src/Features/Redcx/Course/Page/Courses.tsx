
import React from 'react';
interface CourseDataProps {
  text: string | null;
  type: "heading" | "data";
}

const Courses: React.FC<CourseDataProps> = ({
  text,
  type,
}) => {
  return <>{type === "heading" ? <th>{text}</th> : <td>{text}</td>}</>;
};


export default Courses;


// CourseCard.tsx
// import React from 'react';
// 

// interface Icourse {
//   course_id: string;
//   course_name: string;
//   course_duration: string;
//   course_fees: string;
// }

// const CourseCard: React.FC<Icourse> = ({ course_id, course_name, course_duration, course_fees }) => {
//   return (
   
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">{course_name}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">ID: {course_id}</h6>
//         <p className="card-text">Duration: {course_duration}</p>
//         <p className="card-text">Fees: {course_fees}</p>
//         <button className='btn btn-warning'> buy now</button>
//         {/* <div className="card-actions">
//           <button type='button' className='btn btn-primary mx-2'>Update</button>
//           <button type='button' className='btn btn-danger'>Delete</button>
//         </div> */}
//         {/* <Addcourse imgage={''} title={''} duration={''} fees={''} button={''}/> */}
//       </div>
//     </div>
    
//   );
// };

// export default CourseCard;
