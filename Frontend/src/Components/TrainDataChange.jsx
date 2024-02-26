import React from 'react'
import {useForm} from "react-hook-form"
import { useContext } from 'react';
import { AppContext } from './ParentContext';
import axios from "axios"
import Trainimg from "./trainlogo.png"
import "../App.css"
const TrainDataChange = (props) => {
  const {setUpdate,id}=useContext(AppContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    } = useForm();
    const formSubmitHandler=async(data)=>{
try {
  const UpdatedData=await axios.patch(`http://localhost:5000/${id}`,data)
  console.log(UpdatedData.data)
  if(UpdatedData){
    setUpdate(false)
    reset()
  props.FetchData()
  }
} catch (error) {
  console.log(error)
}

    }
   
  return (
    <div className="Datachangediv" style={{
      border:"2px solid black",
      padding:"20px 20px"
    }}>

       <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* <h1>{id}</h1> */}
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
          <img src={Trainimg} alt='' width={"40px"}/>
        <img src="https://cdn-icons-png.flaticon.com/128/9312/9312232.png" width={"20px"} height={"20px"} style={{
        cursor:"pointer",
        border:"1px solid black "
        }}onClick={()=>{setUpdate(false)}}alt="" />
        </div>
      <label style={{ color: 'black' }}>AverageRating:</label>
          <input
            type="number"
            name="average_rating"
            {...register('average_rating', {
              required: 'Enter average_rating',
              validate: (value) => parseFloat(value) <= 5 || 'Rating should be 5 or less'
            })}
            placeholder='Please Rate up to 5'
          />
          {errors.average_rating && <p className="err">{errors.average_rating.message}</p>}
          <input className='InputSubmit' type="submit" value={'Update Data '} /></form>
    </div>
  )
}

export default TrainDataChange
