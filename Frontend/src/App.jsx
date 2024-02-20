import './App.css'
import Navbar from './Components/Navbar'
import Allroutes from './Components/Allroutes'
import { AppContext } from './Components/ParentContext'
function App() {
  

  return (
    <>
    <Navbar/>
    <Allroutes/>
    <AppContext/>
          </>
  )
}

export default App
