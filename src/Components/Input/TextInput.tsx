import React from 'react';
export interface ITextInput{
  type:string,
  value:string,
  name:string,
  label?:string,
  placeholder:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;


} 

const TextInput: React.FC<ITextInput> = ({ type,  value, name, onChange ,placeholder}) => {
  return (
    <input
      type={type} 
      value={value}
      onChange={onChange}
      name={name} 
      placeholder={placeholder} 
      className='form-control mt-1  px-3'

     style={{
      fontSize:15,
   
      // width:580,
      // height:40
      
      
     }}
       

      
      
      
      
      
      
      />
  );
};

export default TextInput