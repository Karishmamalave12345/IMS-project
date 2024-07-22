
import React, { ChangeEvent } from "react";
import TextInput from "../../Components/Input/TextInput";
import Label from "../../Components/Label/Label";
import { IButton, ITextInput } from "../UserMangenment/Modals/FormModuls";
import { Form } from "react-router-dom";
import { text } from "stream/consumers";
import Button from "../../Components/Button/Button";

export interface Imodal {
  heading: string,
  textInput: ITextInput[];
  button:IButton
  
  
}
// interface TextInputProps {
//   placeholder: string;
//   type: string;
//   value: string;
//   name: string;
//   label: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const Modal: React.FC<Imodal> = ({ heading,textInput,button}) => {
  return (
    <>
      <Form>
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

{/* <div className='d-flex justify-content-between'>
        {button.map((button) => (
          // <Button type={button.type}

          //   onClick={button.onClick} text={button.text} />
          <Button/>
        ))}  
</div> */}
 <Button type={button.type} onClick={button.onClick} text={button.text}/>

</div>
   


</Form>
</>
  )
}

export default Modal
