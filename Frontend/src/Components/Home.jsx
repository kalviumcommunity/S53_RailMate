import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../Animation - 1708230937408.json';
import Animation2 from '../Animation.json';
import img from './download.png';
import ErrorAni from './nofound animation.json';
import CorrectAni from './Correct Ani.json';
import { AppContext } from './ParentContext';
import '../App.css';
import FilterByRegion from './FilterByRegion';
import TrainDataChange from './TrainDataChange';
// import { getCookie } from './Cookie';

const Home = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blurBackground, setBlurBackground] = useState('');
  const [filterTrainNumber, setFilterTrainNumber] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const { login } = useContext(AppContext);
  const {update,setUpdate,setId}=useContext(AppContext)
  function getData(){      
    axios.get('https://railmate.onrender.com/Train')
      .then((res) => {
        setOriginalData(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
        setLoading(false);
      });
  }


  const delete_train = async (id) => {
    try {
      await axios.delete(`https://railmate.onrender.com/DeleteTrain/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getData();
  }, []);

  function FilteredData(filteredValue) {
    const Data=originalData;
    if(filteredValue=="All"){
      return Data
    }
    return Data.filter((train) => train.region.includes(filteredValue));
  }

  const filteredData = FilteredData(selectedRegion).filter((train) => train.train_number.includes(filterTrainNumber));

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
    <div className={`container ${blurBackground ? 'blur(8px)' : ''}` } style={{
    }}>
     <div style={{
      display:update ? "block" : "none"
     }}><TrainDataChange getData={getData}/></div> 
      <div className="filter-container" style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '70vw',
      }}>
        <input
          className='InputTrain'
          type="text"
          onChange={(e) => setFilterTrainNumber(e.target.value)}
          placeholder='Search Train By Number'
        />
        <div className="filter" style={{
          border: '2px solid black',
          padding: '10px 10px',
          width: '70px',
        }}>

          <FilterByRegion
            FilteredData={(filteredValue) => {
              setSelectedRegion(filteredValue);
            }}
          />
        </div>
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
            display: 'flex',
            alignItems: 'center',
          }}><Lottie
            options={WrongAnimation}
            height={50}
            width={50}
          />  <span style={{
            color: 'orange',
            textAlign: 'center',
            alignItems: 'center',
          }}>No</span>
            <span style={{ color: 'orange' }}>Train </span>
            <span style={{ color: 'green' }}>Found </span>  <Lottie
              options={WrongAnimation}
              height={50}
              width={50}
            /></h1>

          <h1 style={{
            display: 'flex',
          }}><Lottie
            options={CorrectAnimat}
            height={50}
            width={50}
          /> <span style={{ color: 'orange' }}>Please Enter the correct train Number </span><Lottie
            options={CorrectAnimat}
            height={50}
            width={50}
          /></h1>
        </div>
      ) : (
        filteredData.map((e) => (
          <div key={e._id} className="train-info" style={{
            filter: login ? 'blur(0px)' : 'blur(8px)',
      overflowY : update ? "hidden" : "auto"          
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
    <h2>Train No:</h2>
    <p className='TrainNo'>{e.train_number}</p>
    <h2>Train Name:</h2>
    <p className='TrainName'>{e.train_name}</p>
  </div>
  <div className="RouteContainer">
    <h2>From:</h2>
    <p className='TrainNo'>{e.departure_station}</p>
    <Lottie options={animationOptions2} height={200} width={200} />
    <h2>To:</h2>
    <p className='TrainNo'>{e.destination_station}</p>
  </div>
  <div className="data2">
    <h2>Rating:</h2>
    <p className='TrainRating'>{e.average_rating}</p>
    <h2>Timings:</h2>
    <p className='TrainTimmings'>{e.timings}</p>
  </div>
  <div className="reviews">
    <p><strong>{e.reviews}</strong></p>
    <p><strong>{e.description}</strong></p>
    <p style={{ fontSize: '20px', textAlign: 'center' }}><strong>{e.region}</strong></p>
  </div>
  <div className='putreq'>
    <button className="update" onClick={()=>{
      setUpdate(true);
      setId(e._id);
    }}>Update</button>
    {/* <button onClick={()=>{saveTrain(e)}}>Save</button> */}
    <button className="Delete" onClick={() => { delete_train(e._id); }}>Delete</button>
  </div>
</div>


          </div>
        ))
      )}
    </div>
  );
};

export default Home;
