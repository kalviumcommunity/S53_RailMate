import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:3002/"
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const formSubmitHandler = async (data) => {
  // console.log(data)
try {
  const response =await axios.post("create",data)
  console.log(response.data.data)
} catch (error) {
  console.log("error",error)
}
  };
  

  return (
    <div className="form-container">
      <fieldset>
        <legend>Signup</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <p>Signup Successful</p>
            </div>
          )}

          <label style={{ color: 'black' }}>First Name:</label>
          <input
            type="text"
            name="Name"
            {...register('Name', {
              required: 'Please provide the Name',
              minLength: {
                value: 4,
                message: 'Minimum four characters required',
              },
            })}
          />
          {errors.Name && <p className="err">{errors.Name.message}</p>}

          <label style={{ color: 'black' }}>Email:</label>
          <input
            type="email"
            name="Email"
            {...register('Email', {
              required: 'Enter Email',
              minLength: {
                value: 5,
                message: 'Type valid Email',
              },
            })}
          />
          {errors.Email && <p className="err">{errors.Email.message}</p>}

          <label style={{ color: 'black' }}>Password:</label>
          <input
            type="number"
            name="Password"
            {...register('Password', {
              required: 'Enter Password',
              minLength: {
                value: 10,
                message: 'Please enter the valid Password',
              },
            })}
          />
          {errors.Password && <p className="err">{errors.Password.message}</p>}
          <label style={{ color: 'black' }}>Number:</label>
          <input
            type="number"
            name="ConfirmPassword"
            {...register('ConfirmPassword', {
              required: 'Enter ConfirmPassword',
              minLength: {
                value: 10,
                message: 'Please enter the valid ConfirmPassword',
              },
            })}
          />
          {errors.ConfirmPassword && <p className="err">{errors.ConfirmPassword.message}</p>}

          <input type="submit" value={'Register'} />
        </form>
      </fieldset>
    </div>
  );
}
