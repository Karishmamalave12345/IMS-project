
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "../../../../Components/Form/Form";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import * as CourseReducer from "../../Course/CourseReducer";
import * as CourseAction from "../../Course/CourseAction";
import { Icourse } from "../../../Moduls/Course";
import Update from "./Update";

export interface AddCourse {
  course_id: string;
  course_name: string;
  course_duration: string;
  course_fees: string;
}

const AddCourse: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  // Store configuration
  const courseState: CourseReducer.InitialState = useSelector((state: RootState) => {
    return state[CourseReducer.CourseFeatureKey];
  });

  const [add, setAdd] = useState<AddCourse>({
    course_id: "",
    course_name: "",
    course_duration: "",
    course_fees: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };

  function toSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  function transformKeysToSnakeCase(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => transformKeysToSnakeCase(item));
    }

    return Object.keys(obj).reduce((acc, key) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = transformKeysToSnakeCase(obj[key]);
      return acc;
    }, {} as any);
  }

  const FormSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("submit");
    const snakeCasedUser = transformKeysToSnakeCase(add);
    console.log('Transformed User:', snakeCasedUser);

    try {
      const res = await dispatch(CourseAction.createCourseAction({ body: snakeCasedUser })).unwrap();
      console.log('Submission Response:', res);

      if (res && !res.error) {
        navigate('/course');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAdd({
      course_id: "",
      course_name: "",
      course_duration: "",
      course_fees: "",
    });
    alert("reset");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <footer className="card-footer justify-content-center">
        <button className="btn btn-primary" onClick={handleShow}>Add course</button>
      </footer>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       
        <Modal.Header closeButton className='bg-dark text-light'>
          <Modal.Title>Add Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pt-0 bg-secondary text-light'>
          <div className="row">
            <div className="col-6 mb-3 pb-5">
              <Form
                heading={''}
                button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }}
                textInput={[
                  {
                    placeholder: 'Select Course ID',
                    type: 'text',
                    value: add.course_id,
                    label: 'Course ID',
                    name: 'course_id',
                    onChange: handleChangeInput,
                  },
                  {
                    placeholder: 'Course Name',
                    type: 'text',
                    value: add.course_name,
                    label: 'Course Name',
                    name: 'course_name',
                    onChange: handleChangeInput,
                  },
                ]}
                radioInput={[]}
                dropdown={[]}
              />
            </div>

            <div className='col-6 mb-5'>
              <Form
                heading={''}
                button={{ type: 'submit', onClick: FormReset, text: "Reset" }}
                textInput={[
                  {
                    placeholder: 'Course Fees',
                    type: 'number',
                    value: add.course_fees,
                    label: 'Course Fees',
                    name: 'course_fees',
                    onChange: handleChangeInput,
                  },
                  {
                    placeholder: 'Course Duration',
                    type: 'text',
                    value: add.course_duration,
                    label: 'Course Duration',
                    name: 'course_duration',
                    onChange: handleChangeInput,
                  }
                ]}
                radioInput={[]}
                dropdown={[]}
              />
           
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCourse;






