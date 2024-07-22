
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Icourse } from '../../../Moduls/Course';
import { AppDispatch } from '../../Store';
import * as CourseAction from "../../Course/CourseAction";
import { Modal, Button } from "react-bootstrap";
import Form from "../../../../Components/Form/Form";

interface UpdateProps {
  course: Icourse;
  show: boolean;
  handleClose: () => void;
}

const Update: React.FC<UpdateProps> = ({ course, show, handleClose }) => {
  const [updatecourse, setupdatecourse] = useState<Icourse>(course);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (course) {
      setupdatecourse(course);
    }
  }, [course]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setupdatecourse((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   dispatch(CourseAction.updateCourseAction({ id: updatecourse.course_id, body: updatecourse })).then((res: any) => {
  //     if (res && !res.error) {
  //       handleClose();
  //       navigate('/course');
  //     }
  //   });
  // };

  const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { course_id, ...updatedCourseData } = updatecourse;
    dispatch(CourseAction.updateCourseAction({ id: course_id, body: updatedCourseData })).then((res: any) => {
      if (res && !res.error) {
        handleClose();
        navigate('/course');
      }
    });
  };
  

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Update Course</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0 bg-light text-dark">
        <div className="row">
          <div className="col-6 mb-3 pb-5">
            <Form
              heading={""}
              button={{ type: "submit", onClick: FormSubmit, text: "Submit" }}
              textInput={[
                {
                  type: "number",
                  name: "course_id",
                  value: updatecourse.course_id,
                  label: "Course ID:",
                  placeholder: "Enter your Course ID",
                  onChange: handleChangeInput,
                },
                {
                  type: "text",
                  name: "course_name",
                  value: updatecourse.course_name,
                  label: "Course Name:",
                  placeholder: "Enter your Course Name",
                  onChange: handleChangeInput,
                },
              ]}
              dropdown={[]}
            />
          </div>
          <div className="col-6 mb-5">
            <Form
              heading={""}
              button={{ type: "submit", onClick: FormSubmit, text: "Reset" }}
              textInput={[
                {
                  type: "number",
                  name: "course_fees",
                  value: updatecourse.course_fees,
                  label: "Course Fees:",
                  placeholder: "Enter your Course Fees",
                  onChange: handleChangeInput,
                },
                {
                  type: "numbar",
                  name: "course_duration",
                  value: updatecourse.course_duration,
                  label: "Course Duration:",
                  placeholder: "Enter your Course Duration",
                  onChange: handleChangeInput,
                },
              ]}
              radioInput={[]}
              dropdown={[]}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Update;

