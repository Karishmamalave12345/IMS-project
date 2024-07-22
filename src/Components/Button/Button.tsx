import React, { FormEventHandler } from 'react';
import { IButton } from '../../Features/UserMangenment/Modals/FormModuls';
// 



const Button: React.FC<IButton> = ({ type, onClick, text   }) => {
  return (
    <button type={type} onClick={(e)=>onClick(e)} className='btn btn-warning mt-3 mb-2 mx-3'  style={{
     maxHeight:50,
     textAlign:'center'
    }}>

      
      {text}
    </button>
  );
};

export default Button; //button