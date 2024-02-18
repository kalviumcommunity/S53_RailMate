import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    getValues,
  } = useForm();

  const showToastMessage = () => {
    toast.success("SignUp successful. Please Login For the Content!");
  };

  const formSubmitHandler = async (data) => {
    console.log("data:", data)
    try {
      const response = await axios.post("http://localhost:3002/CreateForm", data)
      console.log(response.data.data)
      showToastMessage();
    } catch (error) {
      console.log("error:", error.message)
    }
  };

  return (
    <div className="signup-container">
      <fieldset>
        <legend style={{color:"orange"}}>Signup</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          

          <label style={{ color: 'black' }}>First Name:</label>
          <input 
            type="text"
            name="FirstName"
            {...register('FirstName', {
              required: 'Please provide the First Name',
              minLength: {
                value: 4,
                message: 'Minimum four characters required',
              },
            })}
          />
          {errors.FirstName && <p className="err0r">{errors.FirstName.message}</p>}
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
          {errors.Email && <p className="err0r">{errors.Email.message}</p>}

          <label style={{ color: 'black' }}>Password:</label>
          <input
            type="password"
            name="Password"
            {...register('Password', {
              required: 'Enter Password',
              minLength: {
                value: 5,
                message: 'Please enter a valid password',
              },
            })}
          />
          {errors.Password && <p className="err0r">{errors.Password.message}</p>}

          <label style={{ color: 'black' }}>Confirm Password:</label>
          <input
            type="password"
            name="ConfirmPassword"
            {...register('ConfirmPassword', {
              required: 'Enter Confirm Password',
              validate: {
                matchesPassword: (value) => {
                  const password = getValues('Password');
                  return password === value || 'Passwords do not match';
                },
              },
            })}
          />
          {errors.ConfirmPassword && <p className="err0r">{errors.ConfirmPassword.message}</p>}

          <label style={{ color: 'black' }}>Date of Birth:</label>
          <input
            type="date"
            name="DOB"
            {...register('DOB', {
              required: 'Enter Date of Birth',
            })}
          />
          {errors.DOB && <p className="err0r">{errors.DOB.message}</p>}
          <ToastContainer />
          <input type="submit" value={'Signup'} />
        </form>
      </fieldset>
    </div>
  );
}
