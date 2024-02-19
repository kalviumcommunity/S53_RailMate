import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const showToastMessage = () => {
    toast.success("SignUp successful. Please Login For the Content!");
  };
  const formSubmitHandler = async (data) => {
console.log(data)
  };
  return (
    <div className="login-container">
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
              showToastMessage()
          )}
         <label style={{ color: 'black' }}>Email:</label>
          <input
            type="email"
            name="email"
            {...register('email', {
              required: 'Enter email',
              minLength: {
                value: 5,
                message: 'Type valid email',
              },
            })}
          />
          {errors.email && <p className="err04">{errors.email.message}</p>}
          <label style={{ color: 'black' }}>Number:</label>
          <input
            type="password"
            name="Password"
            {...register('Password', {
              required: 'Enter Password',
              minLength: {
                value: 5,
                message: 'Please enter the valid phone Password',
              },
            })}
          />
          <ToastContainer />

          {errors.Password && <p className="err">{errors.Password.message}</p>}

          <input type="submit" value={'Login'} />
        </form>
      </fieldset>
    </div>
  );
}
