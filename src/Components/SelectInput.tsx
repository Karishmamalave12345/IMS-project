import React from 'react'
import { IDropdown } from '../Features/UserMangenment/Modals/FormModuls'


const SelectInput: React.FC<IDropdown> = ({ name, value, onChange }) => {
  return (
    <div className='' style={{
      width: "100%"
    }}>
      <label className='d-flex justify-content-start '>Caste:</label>

      <select name={name}
        style={{
          width:"100%"
        }}
        value={value}
        onChange={onChange}
        className='form-control d-flex justify-content-start'>


        <option value="">select</option>
        <option value="option1">OBC</option>
        <option value="option2">OPEN</option>
        <option value="option3">SC</option>

      </select>
    </div>
  )
}

export default SelectInput