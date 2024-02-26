import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from './ParentContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formdata, setFormdata] = useState([]);
  const { login, setlogin } = useContext(AppContext);
  const [User,setUser]=useState("")
  const navigate = useNavigate();
  const showToastMessage = () => {
    toast.error("Please Login with correct account");
};
  useEffect(() => {
    let data = localStorage.getItem('isLoggedIn');

    if (data === 'true') {
      navigate('/');
    }
  }, []);

  const formSubmitHandler = async (data) => {
    
    try {
      const response = await axios.post('https://railmate.onrender.com/login', data);
      // setUser(data.Email)
      // setUser(data.Email)
      // console.log()
console.log(response)
      if (response.data.Message === 'Login Success') {
        setlogin(true);
        const newData = [...formdata, data.Email];
        document.cookie=`User=${data.Email}`
        localStorage.setItem('LoginData', JSON.stringify(newData));
        localStorage.setItem('isLoggedIn', true);
        setFormdata(newData);
        navigate('/');
      } else if (response.data.Message === 'Login Failed') {
        showToastMessage()
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
// console.log(user)


  return (
    <div className="MAIN">
      <div className="login-container">
        <fieldset>
          <legend style={{ color: 'orange' }}>Login</legend>
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <label style={{ color: 'black' }}>Email:</label>
            <input
              type="email"
              name="Email"
              {...register('Email', {
                required: 'Enter Email',
                minLength: {
                  value: 5,
                  message: 'Type a valid Email',
                },
              })}
            />
            {errors.Email && <p className="error">{errors.Email.message}</p>}

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
            {errors.Password && <p className="error">{errors.Password.message}</p>}
<ToastContainer/>
            <input type="submit" value={'Login'} />
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
