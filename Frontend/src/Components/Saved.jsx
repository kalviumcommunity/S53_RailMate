import React, { useState } from 'react'
import axios from "axios"
import { getCookie } from './Cookie';
const Saved = () => {
    const [usersave,setUsersave]=useState([]);
    const userEmail=getCookie("User")
    const Getdata=()=>{
      axios.get(`http://localhost:5000/users/${userEmail}`)
      .then(res=>{
        setUsersave(res.data.user.Saved);
        // console.log(res.data.user.Saved)

      })
      .catch(res=>{console.log(err)});
    }
    Getdata()

  return (
    <div>
      {usersave.map(e=>(
        <>
              <p className='TrainNo'><h2>Train No:</h2>{e.train_number}</p>
              <p className='TrainName'><h2>Train Name:</h2> {e.train_name}</p>
            
        </>
      ))}
    </div>
  )
}

export default Saved
