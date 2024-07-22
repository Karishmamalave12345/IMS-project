
// import React, { useEffect, useState } from 'react';
// import { AppDispatch, useAppDispatch } from '../Redux/Store';
// import { useSelector } from 'react-redux';
// import { RootState } from '../Redux/Store';
// import * as UserAction from '../Redux/User/UserAction';
// import { Link } from 'react-router-dom';
// import Table from './Table';
// import Update from './Page/Update';
// import { Pagination } from 'react-bootstrap';



// export interface IUser {
//   address: string;
//   caste_category: string;
//   contact: string;
//   created_by: string;
//   creation_ts: string; // ISO 8601 date string
//   dob: string; // ISO 8601 date string or null
//   email: string;
//   first_name: string;
//   gender: string;
//   is_active: string; // Assuming 1 for active and 0 for inactive
//   last_name: string;
//   passing_year: string; // Assuming year as number or null
//   password: string;
//   qualification: string;
//   role_id: string; // Assuming role_id is a number
//   subcaste: string;
//   updated_by: string;
//   updation_ts: string; // ISO 8601 date string
//   user_id: string;
// }

// const TableData: React.FC = () => {
//   const [users, setUsers] = useState<IUser[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage =5;
//   const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
//   const [dataType, setDataType] = useState<string>('users');
//   const [headings] = useState<string[]>(["user_id", "First Name", "Last Name", "Email", "Contact", "address", "qualification"]);

//   const dispatch: AppDispatch = useAppDispatch();

//   const fetchData = async () => {
//     let data;
//     if (dataType === 'admin') {
//       data = await dispatch(UserAction.getAdminAction());
//     } else if (dataType === 'faculties') {
//       data = await dispatch(UserAction.getFacultyAction());
//     } else if (dataType === 'students') {
//       data = await dispatch(UserAction.getStudentsAction());
//     }
//     else if (dataType === 'isactive') {
//       data = await dispatch(UserAction.getActiveuserAction());
//     } 
    
//     else {
//       data = await dispatch(UserAction.getAllUserAction());
//     }
//     setUsers(data?.payload?.body || []);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [dataType]);

//   useEffect(() => {
//     setFilteredUsers(
//       users.filter(user =>
//         ` ${user.first_name} ${user.last_name} ${user.email} ${user.contact} ${user.qualification}`.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, users]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//     setCurrentPage(1);
//   };

//   // const indexOfLastUser = currentPage * usersPerPage;
//   // const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   // const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   // const pageNumbers = [];
//   // for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
//   //   pageNumbers.push(i);
//   // }

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const getPaginationItems = () => {
//     const maxPagesToShow = 5;
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
//      }

      
//      return items;
//    };
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

//   return (
//     <>
//       <div className="mt-2">
//         <div className="d-flex justify-content-center">

//         <Link to={'/Register'} className="btn btn-warning"
//         //   style={
//         //     {
//         //       marginLeft:50,
//         //     }
//         //  }

//           > 
//             Add
//           </Link>
//           <select
//             value={dataType}
//             onChange={(e) => setDataType(e.target.value)}
//             className="form-control form-control-sm mx-2 mt-3"
//             style={{ width: '150px', height: '35px',  marginTop:50}}
//           >
//             <option value="users"> All Users</option>
//             <option value="admin">Admin</option>
//             <option value="faculties">Faculties</option>
//             <option value="students">Students</option>
//             <option value="isactive">Active</option>
//           </select>

          
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={handleSearchChange}
//             className="mt-2 mb-2 mx-3"
//           />
//         </div>
//         <table className="table table-bordered table-hover">
//           <thead className="table-dark">
//             <tr>
//               {headings.map((heading) => (
//                 <th key={heading} onClick={() => sortUsers(heading.toLowerCase().replace(' ', '_'))}>
//                   {heading}
//                   {sortConfig?.key === heading.toLowerCase().replace(' ', '_') && sortConfig.direction === 'ascending'}
//                 </th>
//               ))}
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody className="table-light">
//             {currentUsers.map((user) => (
//               <tr key={user.user_id}>
//                 <Table text={user.user_id} type="data" />
//                 <Table text={user.first_name} type="data" />
//                 <Table text={user.last_name} type="data" />
//                 <Table text={user.email} type="data" />
//                 <Table text={user.contact} type="data" />
//                 <Table text={user.address} type="data" />
//                 <Table text={user.qualification} type="data" />
//                 <Update userId={0} />
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* <nav> 
//          <ul className="pagination">
//             <li>
//               <button
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
//               >
//                 Previous
//               </button>
//             </li>
//             {pageNumbers.map((number) => (
//               <li key={number} className="page-item">
//                 <button
//                   onClick={() => setCurrentPage(number)}
//                   className={`page-link ${currentPage === number ? 'active' : ''}`}
//                 >
//                   {number}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
// //                 onClick={() => setCurrentPage(currentPage + 1)}
// //                 className={`page-link ${currentPage === pageNumbers.length ? 'disabled' : ''}`}
// //               >
// //                 Next
//               </button>
//             </li>
//           </ul>
//         </nav> 
//  */}
// <Pagination>
//            <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
//           <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
//            {getPaginationItems()}
//           <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
//            <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
//         </Pagination>
      
//       </div>
//     </>
//   );
// };

// export default TableData

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/Store';
import * as UserAction from '../Redux/User/UserAction';
import { Link } from 'react-router-dom';
import Table from './Table';
import Update from './Page/Update';
import { Pagination } from 'react-bootstrap';

export interface IUser {
  address: string;
  caste_category: string;
  contact: string;
  created_by: string;
  creation_ts: string; // ISO 8601 date string
  dob: string; // ISO 8601 date string or null
  email: string;
  first_name: string;
  gender: string;
  is_active: string; // Assuming 1 for active and 0 for inactive
  last_name: string;
  passing_year: string; // Assuming year as number or null
  password: string;
  qualification: string;
  role_id: string; // Assuming role_id is a number
  subcaste: string;
  updated_by: string;
  updation_ts: string; // ISO 8601 date string
  user_id: string;
}

const TableData: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
  const [dataType, setDataType] = useState<string>('users');
  const [headings] = useState<string[]>(["user_id", "First Name", "Last Name", "Email", "Contact", "address", "qualification"]);

  const dispatch: AppDispatch = useDispatch();

  const fetchData = async () => {
    let data;
    if (dataType === 'admin') {
      data = await dispatch(UserAction.getAdminAction());
    } else if (dataType === 'faculties') {
      data = await dispatch(UserAction.getFacultyAction());
    } else if (dataType === 'students') {
      data = await dispatch(UserAction.getStudentsAction());
    } else if (dataType === 'isactive') {
      data = await dispatch(UserAction.getActiveuserAction());
    } else {
      data = await dispatch(UserAction.getAllUserAction());
    }
    setUsers(data?.payload?.body || []);
  };

  useEffect(() => {
    fetchData();
  }, [dataType]);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        ` ${user.first_name} ${user.last_name} ${user.email} ${user.contact} ${user.qualification}`.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

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

  const sortUsers = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setUsers(prevUsers =>
      [...prevUsers].sort((a, b) => {
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
      <div className="mt-2">
        <div className="d-flex justify-content-center">
          <Link to={'/Register'} className="btn btn-warning">
            Add
          </Link>
          <select
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="form-control form-control-sm mx-2 mt-3"
            style={{ width: '150px', height: '35px', marginTop: 50 }}
          >
            <option value="users"> All Users</option>
            <option value="admin">Admin</option>
            <option value="faculties">Faculties</option>
            <option value="students">Students</option>
            <option value="isactive">Active</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="mt-2 mb-2 mx-3"
          />
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              {headings.map((heading) => (
                <th key={heading} onClick={() => sortUsers(heading.toLowerCase().replace(' ', '_'))}>
                  {heading}
                  {sortConfig?.key === heading.toLowerCase().replace(' ', '_') && sortConfig.direction === 'ascending'}
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {currentUsers.map((user) => (
              <tr key={user.user_id}>
                <Table text={user.user_id} type="data" />
                <Table text={user.first_name} type="data" />
                <Table text={user.last_name} type="data" />
                <Table text={user.email} type="data" />
                <Table text={user.contact} type="data" />
                <Table text={user.address} type="data" />
                <Table text={user.qualification} type="data" />
                <td>
                  <Update userId={parseInt(user.user_id, 10)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
          {getPaginationItems()}
          <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </>
  );
};

export default TableData;



