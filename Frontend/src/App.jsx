import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Components/Allroutes'
import { useEffect , useContext } from 'react'
import { AppContext } from './Components/ParentContext'


function App() {
  
  const {login, setlogin} = useContext(AppContext);

  useEffect(()=>{
    let data = localStorage.getItem("isLoggedIn")
    if(data == "true"){
      setlogin(true);
    }else{
      setlogin(false);
    }
  },[])
  

  return (
    <>
    <Navbar/>
    <Allroutes/>
   

          </>
  )
}

export default App
