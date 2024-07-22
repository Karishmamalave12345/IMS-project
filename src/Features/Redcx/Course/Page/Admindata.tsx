
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../Store';
// import * as CourseAction from "../../Course/CourseAction";
// import { Icourse } from '../../../Moduls/Course';
// import Update from "./Update";
// import Addcourse from './Addcourse';
// import Courses from './Courses';
// import { Button, Modal } from 'react-bootstrap';

// const Admindata: React.FC = () => {
//   const [courses, setCourses] = useState<Icourse[]>([]);
//   const [headings] = useState<string[]>(["CourseID", "CourseName", "CourseDuration", "CourseFees"]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [itemsPerPage] = useState<number>(5); // Set items per page
//   const [show, setShow] = useState<boolean>(false);
//   const [selectedCourse, setSelectedCourse] = useState<Icourse | null>(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [courseToDelete, setCourseToDelete] = useState<string | null>(null);  const dispatch: AppDispatch = useDispatch();

//   const getAllCourses = async () => {
//     const data = await dispatch(CourseAction.getAllCourseAction());
//     setCourses(data?.payload?.body);
//   };

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleDeleteClick = (id: string) => {
//     setCourseToDelete(id);
//     setShowDeleteModal(true);
//     }
//   const deleteCourse = (id: string) => {
//     if (id) {
//       dispatch(CourseAction.deleteCourseAction({ id: id })).then((res: any) => {
//         if (res && !res.error) {
//           getAllCourses();
//         }
//       });
//     }
//   };

//   const handleUpdateClick = (course: Icourse) => {
//     setSelectedCourse(course);
//     setShow(true);
//   };

//   const handleClose = () => {
//     setShow(false);
//     setSelectedCourse(null);
//   };

//   // Calculate paginated data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className=''>
//       <Addcourse />
//       <table className='table table-bordered table-hover'>
//         <thead className='table-dark'>
//           <tr>
//             {headings.map((heading) => (
//               <Courses key={heading} text={heading} type='heading' />
//             ))}
//             <Courses text={'Action'} type={'heading'} />
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((course, index) => (
//             <tr key={index}>
//               <Courses text={course.course_id} type='data' />
//               <Courses text={course.course_name} type='data' />
//               <Courses text={course.course_duration} type='data' />
//               <Courses text={course.course_fees} type='data' />
//               <td>
//                 <button className='btn btn-primary mx-3' onClick={() => handleUpdateClick(course)}>Update</button> 
//                 <button className='btn btn-primary' onClick={() => handleDeleteClick(course.course_id)}>Delete</button>
//               </td>   
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <button onClick={handleNextPage} disabled={indexOfLastItem >= courses.length}>Next</button>
//       </div>
//       {selectedCourse && (
//         <Update course={selectedCourse} show={show} handleClose={handleClose} />
//       )}
//       <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirm Delete</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="danger" onClick={confirmDelete}>
//                         Delete
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//     </div>
//   );
// };

// export default Admindata;






// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../Store';
// import * as CourseAction from "../../Course/CourseAction";
// import { Icourse } from '../../../Moduls/Course';
// import Update from "./Update";
// import Addcourse from './Addcourse';
// import Courses from './Courses';
// import { Button, Modal } from 'react-bootstrap';

// const Admindata: React.FC = () => {
//   const [courses, setCourses] = useState<Icourse[]>([]);
//   const [headings] = useState<string[]>(["CourseID", "CourseName", "CourseDuration", "CourseFees"]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [itemsPerPage] = useState<number>(5); // Set items per page
//   const [show, setShow] = useState<boolean>(false);
//   const [selectedCourse, setSelectedCourse] = useState<Icourse | null>(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
//   const dispatch: AppDispatch = useDispatch();

//   const getAllCourses = async () => {
//     const data = await dispatch(CourseAction.getAllCourseAction());
//     setCourses(data?.payload?.body);
//   };

//   useEffect(() => {
//     getAllCourses();
//   }, []);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleDeleteClick = (id: string) => {
//     setCourseToDelete(id);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (courseToDelete) {
//       dispatch(CourseAction.deleteCourseAction({ id: courseToDelete })).then((res: any) => {
//         if (res && !res.error) {
//           getAllCourses();
//         }
//         setShowDeleteModal(false);
//       });
//     }
//   };

//   const handleUpdateClick = (course: Icourse) => {
//     setSelectedCourse(course);
//     setShow(true);
//   };

//   const handleClose = () => {
//     setShow(false);
//     setSelectedCourse(null);
//   };

//   // Calculate paginated data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className=''>
//       <Addcourse />
//       <table className='table table-bordered table-hover'>
//         <thead className='table-dark'>
//           <tr>
//             {headings.map((heading) => (
//               <Courses key={heading} text={heading} type='heading' />
//             ))}
//             <Courses text={'Action'} type={'heading'} />
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((course, index) => (
//             <tr key={index}>
//               <Courses text={course.course_id} type='data' />
//               <Courses text={course.course_name} type='data' />
//               <Courses text={course.course_duration} type='data' />
//               <Courses text={course.course_fees} type='data' />
//               <td>
//                 <button className='btn btn-primary mx-3' onClick={() => handleUpdateClick(course)}>Update</button> 
//                 <button className='btn btn-danger' onClick={() => handleDeleteClick(course.course_id)}>Delete</button>
//               </td>   
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <button onClick={handleNextPage} disabled={indexOfLastItem >= courses.length}>Next</button>
//       </div>
//       {selectedCourse && (
//         <Update course={selectedCourse} show={show} handleClose={handleClose} />
//       )}
//       <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Admindata;


import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store';
import * as CourseAction from "../../Course/CourseAction";
import { Icourse } from '../../../Moduls/Course';
import Update from "./Update";
import Addcourse from './Addcourse';
import Courses from './Courses';
import { Button, Modal, Pagination } from 'react-bootstrap';

const Admindata: React.FC = () => {
  const [courses, setCourses] = useState<Icourse[]>([]);
  const [headings] = useState<string[]>(["CourseID", "CourseName", "CourseDuration", "CourseFees"]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5); // Set items per page
  const [show, setShow] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<Icourse | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const getAllCourses = async () => {
    const data = await dispatch(CourseAction.getAllCourseAction());
    setCourses(data?.payload?.body);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteClick = (id: string) => {
    setCourseToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (courseToDelete) {
      dispatch(CourseAction.deleteCourseAction({ id: courseToDelete })).then((res: any) => {
        if (res && !res.error) {
          getAllCourses();
        }
        setShowDeleteModal(false);
      });
    }
  };

  const handleUpdateClick = (course: Icourse) => {
    setSelectedCourse(course);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedCourse(null);
  };

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

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
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className=''>
      <Addcourse />
      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            {headings.map((heading) => (
              <Courses key={heading} text={heading} type='heading' />
            ))}
            <Courses text={'Action'} type={'heading'} />
          </tr>
        </thead>
        <tbody>
          {currentItems.map((course, index) => (
            <tr key={index}>
              <Courses text={course.course_id} type='data' />
              <Courses text={course.course_name} type='data' />
              <Courses text={course.course_duration} type='data' />
              <Courses text={course.course_fees} type='data' />
              <td>
                <button className='btn btn-primary mx-3' onClick={() => handleUpdateClick(course)}>Update</button> 
                <button className='btn btn-danger' onClick={() => handleDeleteClick(course.course_id)}>Delete</button>
              </td>   
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {getPaginationItems()}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
      {selectedCourse && (
        <Update course={selectedCourse} show={show} handleClose={handleClose} />
      )}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admindata;
