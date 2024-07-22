import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from '../../Components/Form/Form';
import { Icourse } from '../Moduls/Course';


export interface Enrolldata {
  SelectCourse: string,
  PaidFees: string,
  CourseFees: string,
  balancedfees: string,
  incomeamount: string,
  transactionid: string,
  userid: string,
  revenuecategoryid: string,
}

const EnrollmentForm: React.FC<Icourse> = (props) => {
  const [Enroll, SetEnroll] = useState<Enrolldata>({
    SelectCourse: props.title,
    PaidFees: '',
    CourseFees: props.fees,
    balancedfees: '',
    incomeamount: '',
    transactionid: '412',
    userid: '44',
    revenuecategoryid: '987'
  });

  useEffect(() => {
    const coursefee = parseInt(props.fees) || 0;
    const paidfees = parseInt(Enroll.PaidFees) || 0;
    const balncefee = coursefee -paidfees;
    

    SetEnroll((Enroll) => ({
      ...Enroll,
      balancedfees:balncefee.toString()
    }))
  }, [Enroll.PaidFees,props.course_fees])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetEnroll({
      ...Enroll,
      [e.target.name]: e.target.value,
    });
  };



  const FormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("submit");
  }

  const FormReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("reset");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   
      <footer className="card-footer justify-content-center">
        <button className="btn btn-primary" onClick={handleShow}>Buy Now</button>
      </footer>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-dark text-light'>
          <Modal.Title>Enrollment Form</Modal.Title>
        </Modal.Header>
        <div className=''>
        <Modal.Body className='pt-0 bg-secondary text-light'>
          <div className="div">
            <div className="row">
              <div className=" col-6 mb-3 pb-5">

                  <Form heading={''} button={{ type: 'submit', onClick: FormSubmit, text: "Submit" }} textInput={[
                    {
                      placeholder: 'Select Course',
                      type: 'text',
                      value: props.course_name,
                      label: 'Select Course',
                      name: 'SelectCourse',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: 'Paid Fees',
                      type: 'number',
                      value: Enroll.PaidFees,
                      label: 'Paid Fees',
                      name: 'PaidFees',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: '',
                      type: 'number',
                      value: Enroll.incomeamount ||Enroll.PaidFees,
                      label: 'Income Amount',
                      name: 'incomeamount',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: '',
                      type: 'text',
                      value: Enroll.userid,
                      label: 'User Id',
                      name: 'userid',
                      onChange: handleChangeInput,
                    }
                  ]} radioInput={[]} dropdown={[]} />
                </div>

                <div className='col-6 mb-5'>
                  <Form heading={''} button={{ type: 'submit', onClick: FormReset, text: "Reset" }} textInput={[
                    {
                      placeholder: '',
                      type: 'number',
                      value: props.course_fees,
                      label: 'Course Fees',
                      name: 'CourseFees',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: '',
                      type: 'number',
                      value: Enroll.balancedfees,
                      label: 'Balanced Fees',
                      name: 'balancedfees',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: '',
                      type: 'number',
                      value: Enroll.transactionid,
                      label: 'Transaction Id',
                      name: 'transactionid',
                      onChange: handleChangeInput,
                    },
                    {
                      placeholder: '',
                      type: 'text',
                      value: Enroll.revenuecategoryid,
                      label: 'Revenue Category Id',
                      name: 'revenuecategoryid',
                      onChange: handleChangeInput,
                    }
                  ]} radioInput={[]} dropdown={[]} />
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default EnrollmentForm;

