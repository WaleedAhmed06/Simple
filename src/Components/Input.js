import React from 'react';

const Input = ({ type, value, onChange,label }) => {
  return (
<>
    <label>{label}</label>
    <input 
      type={type}
      value={value}
      onChange={onChange}
      placeholder='Name'
      
    />
    </>
  );
};

export default Input;
