import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../Animation - 1708230937408.json";
import Animation2 from "../Animation.json";
import img from "./download.png";
import ErrorAni from "./nofound animation.json"
import CorrectAni from "./Correct Ani.json"
import { AppContext } from './ParentContext';
import loginani from "./LoginAni.json"
import '../App.css';

const Home = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blurBackground, setBlurBackground] = useState('');
  const [filterTrainNumber, setFilterTrainNumber] = useState('');
  const { login } = useContext(AppContext);

const delete_train=async(id)=>{
try {
  const deletedata=await axios.delete(`https://railmate.onrender.com/DeleteTrain/${id}`)
  console.log(deletedata)
} catch (error) {
  console.log(error)
}
}
  useEffect(() => {
    axios.get("https://railmate.onrender.com/Train")
      .then(res => {
        setOriginalData(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("err", err);
        setLoading(false);
      });
  }, []);



    const filteredData = data.filter(train => train.train_number.includes(filterTrainNumber));

 
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const animationOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Animation2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const WrongAnimation = {
    loop: true,
    autoplay: true,
    animationData: ErrorAni,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const CorrectAnimat = {
    loop: true,
    autoplay: true,
    animationData: CorrectAni,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={`container ${blurBackground ? 'blur(8px)' : ''}`}>
      <div className="filter-container">
        <input
          className='InputTrain'
          type="text"
          onChange={(e) => setFilterTrainNumber(e.target.value)}
          placeholder='Search Train By Number'
        />
      </div>

      {loading && (
        <div className="animation-container">
          <Lottie
            options={animationOptions}
            height={200}
            width={200}
          />
        </div>
      )}
       
      {!loading && filteredData.length === 0 ? (
        <div className="animation-container">
          <Lottie
            options={animationOptions}
            height={200}
            width={200}
          />
          <h1 style={{
            display: "flex",
            alignItems: "center"

          }}><Lottie
            options={WrongAnimation}
            height={50}
            width={50}
          />  <span style={{
            color: 'orange',
            textAlign: "center",
            alignItems: "center"
          }}>No</span>
            <span style={{ color: 'orange' }}>Train </span>
            <span style={{ color: 'green' }}>Found </span>  <Lottie
              options={WrongAnimation}
              height={50}
              width={50}
            /></h1>

          <h1 style={{
            display: "flex"
          }}><Lottie
            options={CorrectAnimat}
            height={50}
            width={50}
          /> <span style={{ color: "orange" }}>Please Enter the correct train Number </span><Lottie
            options={CorrectAnimat}
            height={50}
            width={50}
          /></h1>
        </div>
      ) : (
        filteredData.map((e, i) => (
          <div key={e._id} className="train-info" style={{
            filter: login ? "blur(0px)" : "blur(8px)",
            }}>
            <div className="TrainImg">
              <h1 className='Railmitra'>
                <span style={{ color: 'orange' }}>Rail</span>
                <span style={{ color: 'green' }}>Mitra</span>
              </h1>
              <img src={img} alt="" />
            </div>
            <div>
              <div className="dataContainer">
                <p className='TrainNo'><h2>Train No:</h2>{e.train_number}</p>
                <p className='TrainName'><h2>Train Name:</h2> {e.train_name}</p>
              </div>
              <div className="RouteContainer">
                <p className='TrainNo'><h2>From:</h2> {e.departure_station}</p>
                <Lottie options={animationOptions2} height={200} width={200} />
                <p className='TrainNo'><h2>To:</h2> {e.destination_station}</p>
              </div>
              <div className="data2">
                <p className='TrainRating'><h2>Rating:</h2> {e.average_rating}</p>
                <p className='TrainTimmings'><h2>Timmings:</h2>{e.timings}</p>
              </div>
              <div className="reviews">
              <p>{e.reviews}</p>
              <p>{e.description}</p>
              </div>
              <div className='putreq'>
            <button className="update">Update</button>
            <button className="Delete" onClick={()=>{delete_train(e._id)}}>Delete</button></div>
            </div >
         
          </div>
        ))
      )}
    </div>
  );
};

export default Home;