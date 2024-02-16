import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TrainputForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        } = useForm();
        const showToastMessage = () => {
            toast.success("Train Added Sucessfully!");
        };
  const formSubmitHandler = async (data) => {
    //   console.log("data:",data)
      try {
          const response=await axios.post("https://railmate.onrender.com/CreateTrain",data)
          console.log(response.data.data)
        } catch (error) {
            console.log("error:",error.message)
        }
    };


    return (
        <div>
  {isSubmitSuccessful && showToastMessage()}
    <div className="form-container">
      <fieldset>
        <legend>Bharatiya Rail</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
         
{/* Train number */}
          <label style={{ color: 'black' }}>Train Number:</label>
          <input
  type="text"
  name="train_number"
  {...register('train_number', {
    required: 'Please provide the train_number',
    minLength: {
      value: 5,  
      message: 'Exactly five characters required',
    },
    maxLength: {
      value: 5, 
      message: 'Exactly five characters required',
    },
  })}
/>

          {errors.train_number && <p className="err">{errors.train_number.message}</p>}
{/* Train name */}

          <label style={{ color: 'black' }}>TrainName:</label>
          <input
            type="text"
            name="train_name"
            {...register('train_name', {
              required: 'Enter train_name'})}
          />
          {errors.train_name && <p className="err">{errors.train_name.message}</p>}
{/* Train depautrure station */}

          <label style={{ color: 'black' }}>Depature Station:</label>
          <input
            type="text"
            name="departure_station"
            {...register('departure_station', {
              required: 'Enter departure_station'})}
          />
          {errors.departure_station && <p className="err">{errors.departure_station.message}</p>}
{/* Train destination station */}

          <label style={{ color: 'black' }}>destination_station:</label>
          <input
            type="text"
            name="destination_station"
            {...register('destination_station', {
              required: 'Enter Destination_station'
            })}
          />
          {errors.destination_station && <p className="err">{errors.destination_station.message}</p>}
{/* Train  Description */}

          <label style={{ color: 'black' }}>Description:</label>
          <input
            type="text"
            name="description"
            {...register('description', {
              required: 'Enter description'
            })}
          />
          {errors.description && <p className="err">{errors.description.message}</p>}
{/* Train AverageRating */}

          <label style={{ color: 'black' }}>AverageRating:</label>
          <input
            type="number"
            name="average_rating"
            {...register('average_rating', {
              required: 'Enter average_rating'
            })}
          />
          {errors.average_rating && <p className="err">{errors.average_rating.message}</p>}
{/* Train reviews */}

          <label style={{ color: 'black' }}>Reviews:</label>
          <input
            type="text"
            name="reviews"
            {...register('reviews', {
              required: 'Enter average_rating'
            })}
          />
          {errors.reviews && <p className="err">{errors.reviews.message}</p>}
{/* Train timings */}

          <label style={{ color: 'black' }}>Timings:</label>
          <input
            type="number"
            name="timings"
            {...register('timings', {
              required: 'Enter timings'
            })}
          />
          {errors.timings && <p className="err">{errors.timings.message}</p>}
          <ToastContainer />

          <input type="submit" value={'Enter Train'} />
        </form>
      </fieldset>
    </div>
    </div>
  )
}

export default TrainputForm
