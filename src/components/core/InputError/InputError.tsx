import React from 'react'
import { Field } from 'formik';
import './styles.scss';

const InputError = ({ name, placeholder, errors, touched, ...props }: any) => {
  return (
    <div className='inputError_container'>
      <Field className={`input_field ${errors && 'required'}`} placeholder={placeholder} name={name} {...props} />
      {errors && touched ? (
        <span className='errorMessage'>Este valor es requerido.</span>
      ) : null}</div>
  )
}

export default InputError