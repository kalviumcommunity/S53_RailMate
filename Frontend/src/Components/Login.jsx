import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import lottie from 'lottie-web';
import animationData from './Animation - 1708324202222.json';
import WrongAni from "./Wrong.json"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const [anicount,setAnicount]=useState(0)
const [anicount2,setAnicount2]=useState(0)
const[seterr,setnewerr]=useState("")
const[setsucess,setnewsucess]=useState("")
  const formSubmitHandler = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login/data', data);

      if (response.data.Message === 'Login Success') {
        animation();
      } else {
        console.error('Unexpected response:', response.data);
        animation2()
        setnewerr("Please Do Login with correct Credenials")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const animation = () => {
    if(anicount<1){

      const animationInstance = lottie.loadAnimation({
        container: document.getElementById('animation-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    setAnicount2(anicount2+1)
  };
  const animation2 = () => {
    if(anicount<1){

      const animationInstance = lottie.loadAnimation({
        container: document.getElementById('animation-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: WrongAni,
      });
    }
    setAnicount(anicount+1)

  };

  useEffect(() => {
    
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className='MAIN'>
      <div id="animation-container"><p>{seterr}</p></div>

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

            <input type="submit" value={'Login'} />
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
