import React from 'react'
import { IRedio } from '../Features/UserMangenment/Modals/FormModuls'




const RadioInput:React.FC<IRedio> = ({type,name,onChange,value,}) => {
  return (
    <>
    <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    >
    </input>
    </>
  )
}

export default RadioInput