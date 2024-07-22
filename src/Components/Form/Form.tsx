import React from 'react'
import { IForm } from '../../Features/UserMangenment/Modals/FormModuls'
import Label from '../Label/Label'
import TextInput from '../Input/TextInput'
import Button from '../Button/Button'
import RadioInput from '../Radio'
import SelectInput from '../SelectInput'


const Form: React.FC<IForm> = ({ heading, button, textInput, radioInput, dropdown }) => {
  return (
    <>
      <form action="">
        <h2>{heading}</h2>
        <div className="row">

          {textInput.map((textInput) => (

            <div className=''>

              <Label text={textInput.label} />
              <TextInput type={textInput.type}
                value={textInput.value}
                name={textInput.name} onChange={textInput.onChange} placeholder={textInput.placeholder} />
            </div>

          ))}


<div className='col-6'>
          {
            radioInput && radioInput[0]?.name==="gender" && <Label text='Gender' />
          }
          <div className="d-flex justify-content-between">
            {radioInput?.map((radioinput) => (

              <div className='d-flex'>
                <Label text={radioinput.label} />
                <RadioInput type={radioinput.type}
                value={radioinput.value}
                name={radioinput.name} onChange={radioinput.onChange} checked={false}                  />
              </div>
            ))}
          </div>
        </div>


              {dropdown?.map((dropdown) => (
                <div className=''>
                  <Label text={dropdown.label} />

                  <SelectInput

                    name={dropdown.name}
                    value={dropdown.value}
                    onChange={dropdown.onChange} />

                </div>


              ))}

        </div>

        <Button type={button.type} onClick={button.onClick} text={button.text} />



        {/* 
        <Button type={button.type} onClick={button.onClick} text={button.text}/> */}





      </form>

    </>


  )
}

export default Form
