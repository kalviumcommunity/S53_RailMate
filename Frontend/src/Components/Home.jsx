import React, { useEffect, useState } from 'react'
import axios from "axios"
const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://railmate.onrender.com/Train").then(res => {
      // console.log(res.data)
      setData(res.data)
    }).catch(err => { console.log("err", err) })
  })
  const TrainDelete = async (id) => {
    try {
      const deletedtrain = await axios.delete(`https://railmate.onrender.com/DeleteTrain/${id}`)
      console.log(deletedtrain)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>

      {data.map((e, i) => (
        <div style={{
          border: "2px solid black",
          marginTop: "20px"
        }}>
          <p>{e.train_number}</p>
          <p>{e.train_name}</p>
          <p>{e.departure_station}</p>
          <p>{e.destination_station}</p>
          <p>{e.average_rating}</p>
          <p>{e.reviews}</p>
          <p>{e.description}</p>
          <p>{e.timings}</p>
          <button onClick={()=>{
            TrainDelete(e._id)
          }}>Delete Train</button>

        </div>
      ))}


    </div>
  )
}

export default Home
