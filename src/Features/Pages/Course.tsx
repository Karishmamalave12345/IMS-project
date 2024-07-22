// import React, { useEffect, useState } from 'react'
// import { Modal, Pagination } from 'react-bootstrap'
// import { Icourse } from '../Moduls/Course';

// import { AppDispatch, RootState, useAppDispatch } from '../Redcx/Store';
// import * as CourseReducer from "../Redcx/Course/CourseReducer"
// import * as CourseAction from "../Redcx/Course/CourseAction";
// import { useSelector } from 'react-redux';

// import CardList from '../../Components/Card/CardList';
// import { IUser } from '../../moduls/user';


// const Course: React.FC = ({}) => {
//   const [users, setUsers] = useState<IUser[]>([]);
//   const [course, setCourses] = useState<Icourse[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [itemsPerPage] = useState<number>(6); // Set items per page
//   const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
//   const usersPerPage = 5;
//   const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

//   const dispatch: AppDispatch = useAppDispatch();

//   const courseState: CourseReducer.InitialState = useSelector((state: RootState) => {
//     return state[CourseReducer.CourseFeatureKey];
//   });

//   const getAllCourse = async () => {
//     const data = await dispatch(CourseAction.getAllCourseAction());
//     setCourses(data?.payload?.body);
//   };

//   useEffect(() => {
//     getAllCourse();
//   }, []);

 
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = course.slice(indexOfFirstItem, indexOfLastItem);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };


//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const getPaginationItems = () => {
//     const maxPagesToShow = 10;
//     const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
//     let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
//     let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

//     if (endPage - startPage + 1 < maxPagesToShow) {
//       startPage = Math.max(endPage - maxPagesToShow + 1, 1);
//     }

//     const items = [];
//     for (let i = startPage; i <= endPage; i++) {
//       items.push(
//         <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
//           {i}
//         </Pagination.Item>
//       );
//     }

//     return items;
//   };

//   const sortUsers = (key: string) => {
//     let direction = 'ascending';
//     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//     setUsers(prevUsers =>
//       [...prevUsers].sort((a, b) => {
//         if (`a[key] < b[key]`) {
//           return direction === 'ascending' ? -1 : 1;
//         }
//         if (`a[key] > b[key]`) {
//           return direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       })
//     );
//   };

// //  const card:ICard []=[{
// //   imgage:forntend ,title:"Fronted devloper" , duration:"9 month" ,fees:"30000", button:"buy now"
// //  },{
// //    imgage: forntend,
// //    title: 'Web developer',
// //    duration: '7month',
// //    fees: '45000',
// //    button: 'buy now'
// //  },{
// //    imgage: forntend,
// //    title: 'Data science',
// //    duration: '8month',
// //    fees: '60000',
// //    button: 'buy now'

// //  },{

// //    imgage:forntend,
// //    title: 'Cloud Computing',
// //    duration: '9 month',
// //    fees: '65000',
// //    button: 'buy now'
// //  }]

 
// //  const item:ICard []=[{
// //   imgage:forntend ,title:"fronted devloper" , duration:"9 month" ,fees:"20000", button:""
// //  },{
// //    imgage: forntend,
// //    title: 'web developer',
// //    duration: '7month',
// //    fees: '25000',
// //    button: ''
// //  },{
// //    imgage: forntend,
// //    title: 'Data science',
// //    duration: '8month',
// //    fees: '30000',
// //    button: ''

// //  },{

// //    imgage:forntend,
// //   title: 'Cloud Computing',
// //    duration: '9 month',
// //    fees: '35000',
// //    button: ''
// //  }]



//   return (
//     <>
//   <div className="course-container">
//         {currentItems.map((course, index) => (
//           <CardList 
//             key={index}
//             course_id={course.course_id}
//             course_name={course.course_name}
//             course_duration={course.course_duration}
//             course_fees={course.course_fees} fees={course.fees} title={course.title}                     />
//         ))}
//       </div>
//       {/* <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <button onClick={handleNextPage} disabled={indexOfLastItem >= course.length}>Next</button>
//       </div> */}
//       <Pagination>
//           <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
//           <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
//           {getPaginationItems()}
//           <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
//           <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
//         </Pagination>
//     </>
//     //  <>
//     /* <div className="container-fluid mt-auto">

//         <div className="row">
//           <div className="col ">

//             <h3 className="card-title text-start">Enrolled Course</h3>

//           </div>

//         </div>
//       </div> */

//  //       <div className="container-fluid">

// // <div className="row">

// //   <div className="col-3"> */}


//   // <Card card={item} /> */ 

//   /* //   </div>

// // </div> */

// /* /* </div> <br></br>
//       <div className="container-fluid mb-4">

//         <div className="row">

//           <div className="col-3">

//           <h3 className="card-title text-center mb-2">Available Course</h3> */

//           /* <Card card={card} /> 



          
//           //  </div>

//         // </div>

//       // </div> */ 






      

//   //  </>




//   );
// };
   


// export default Course


import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { Icourse } from '../Moduls/Course';

import { AppDispatch, RootState, useAppDispatch } from '../Redcx/Store';
import * as CourseReducer from "../Redcx/Course/CourseReducer"
import * as CourseAction from "../Redcx/Course/CourseAction";
import { useSelector } from 'react-redux';

import CardList from '../../Components/Card/CardList';
import CourseData from '../Redcx/Course/Page/CourseData';


const Course: React.FC = () => {
  const [users, setUsers] = useState<Icourse[]>([]);
  const [course, setCourses] = useState<Icourse[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6); // Set items per page
  const usersPerPage = 5;
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  const dispatch: AppDispatch = useAppDispatch();

  const courseState: CourseReducer.InitialState = useSelector((state: RootState) => {
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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(course.length / itemsPerPage);

  const getPaginationItems = () => {
    const maxPagesToShow = 10;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    const items = [];
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  const sortCourses = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setCourses(prevCourses =>
      [...prevCourses].sort((a, b) => {
        if (`a[key] < b[key]`) {
          return direction === 'ascending' ? -1 : 1;
        }
        if (`a[key] > b[key]`) {
          return direction === 'ascending' ? 1 : -1;
        }
        return 0;
      })
    );
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
            course_fees={course.course_fees} fees={''} title={''}          />
        ))}
      </div>
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {getPaginationItems()}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </>
  );
};

export default Course;
