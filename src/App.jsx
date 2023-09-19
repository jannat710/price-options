import LineChart from './components/LineChart/LineChart'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/DaisyNav/DaisyNav'


function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
