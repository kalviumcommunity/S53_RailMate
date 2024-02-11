import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const formSubmitHandler = async (data) => {
console.log(data)
  };
  

  return (
    <div className="form-container">
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="success">
              <p>Registration Successful</p>
            </div>
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
          {errors.email && <p className="err">{errors.email.message}</p>}
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
          {errors.Password && <p className="err">{errors.Password.message}</p>}

          <input type="submit" value={'Login'} />
        </form>
      </fieldset>
    </div>
  );
}
