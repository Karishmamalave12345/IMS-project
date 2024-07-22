// import React, { useEffect, useState } from 'react';
// import * as CourseReducer from "../../Course/CourseReducer";
// import { useSelector } from 'react-redux';
// import { AppDispatch, RootState, useAppDispatch } from '../../Store';
// import * as CourseAction from "../../Course/CourseAction";
// import Courses from './Courses';
// import Update from './Update';



// export interface ITable {
//   CourseID: string;
//   CourseName: string;
//   CourseDursation: string;
//   Coursefess: string;
// }

// interface Icourse {
//   course_id: string;
//   course_name: string;
//   course_duration: string;
//   course_fees: string;
// }

// const CourseData: React.FC = () => {
//   const [course, setCourses] = useState<Icourse[]>([]);
//   const [headings, setHeadings] = useState<string[]>(["CourseID", "CourseName", "CourseDursation", "Coursefess"]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [itemsPerPage] = useState<number>(5); // Set items per page
//   const dispatch: AppDispatch = useAppDispatch();

//   const TableState: CourseReducer.InitialState = useSelector((state: RootState) => {
//     return state[CourseReducer.CourseFeatureKey];
//   });

//   const getAllCourse = async () => {
//     const data = await dispatch(CourseAction.getAllCourseAction());
//     setCourses(data?.payload?.body);
//   };

//   useEffect(() => {
//     getAllCourse();
//   }, []);

//   // Calculate paginated data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = course.slice(indexOfFirstItem, indexOfLastItem);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   return (
//     <>
   
//       <div className=''>
//         <table className='table table-bordered table-hover'>
//           <thead className='table-dark'>
//             <tr>
//               {headings.map((heading) => (
//                 <Courses key={heading} text={heading} type='heading' />
//               ))}
//               <Courses text={'Action'} type={'heading'} />
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((course, index) => (
//               <tr key={index}>
//                 <Courses text={course.course_id} type='data' />
//                 <Courses text={course.course_name} type='data' />
//                 <Courses text={course.course_duration} type='data' />
//                 <Courses text={course.course_fees} type='data' />
//                 {/* <td>
//                   <button type='button' className='btn btn-primary mx-2'>Update</button>
//                   <button type='button' className='btn btn-primary'>Delete</button>
//                 </td> */}
//                 <Update/>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="pagination">
//           <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//           <button onClick={handleNextPage} disabled={indexOfLastItem >= course.length}>Next</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseData;  




// CourseData
import React, { useEffect, useState } from 'react';
import * as CourseReducer from "../../Course/CourseReducer";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../../Store';
import * as CourseAction from "../../Course/CourseAction";
import Button from '../../../../Components/Button/Button';
import Update from '../../../../Table/Page/Update';
import CardList from '../../../../Components/Card/CardList';


interface Icourse {
  course_id: string;
  course_name: string;
  course_duration: string;
  course_fees: string;
}

const CourseData: React.FC = () => {
  const [course, setCourses] = useState<Icourse[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6); 
  const dispatch: AppDispatch = useAppDispatch();

  const TableState: CourseReducer.InitialState = useSelector((state: RootState) => {
    return state[CourseReducer.CourseFeatureKey];
  });

  const getAllCourse = async () => {
    const data = await dispatch(CourseAction.getAllCourseAction());
    setCourses(data?.payload?.body);
  };

  useEffect(() => {
    getAllCourse();
  }, []);

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = course.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="course-container">
        {currentItems.map((course, index) => (
          <CardList
            key={index}
            course_id={course.course_id}
            course_name={course.course_name}
            course_duration={course.course_duration}
            course_fees={course.course_fees} fees={course.course_fees} title={course.course_name}            />
       
        ))}
      
      </div>
      <Update userId={0}/>
    
  
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastItem >= course.length}>Next</button>
      </div>
    
    </>
  );
};

export default CourseData;

