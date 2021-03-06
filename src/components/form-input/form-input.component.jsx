import React from 'react';


const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`} style={{margin:10}}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
