import React from 'react';
import { ILabel } from '../../Features/UserMangenment/Modals/FormModuls';




const Label: React.FC<ILabel> = ({ text }) => {
  return (
    <label className='mt-2 mb-2 d-flex justify-content-start mx-2' 
    style={{
      //  fontSize:20,
      // margin:20


    }}>


      
      {text} 
      
    </label>
  
  );
};
export default Label