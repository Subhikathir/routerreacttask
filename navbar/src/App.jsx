import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { All, Datascience , Cyber,Career ,Fullstack,Home} from './components/pages'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
       <Navbar/>
      <Routes>  
        <Route path ="/" elememt={<Home/>}/>    
        <Route path = "/all" element={<All/>}/>
        <Route path = "/fullstackdeveloper" element={<Fullstack/>}/>
        <Route path = "/datascience" element={<Datascience/>}/>
        <Route path = "/Cybersecurity" element={<Cyber/>}/>
        <Route path = "/career" element={<Career/>}/>
      </Routes>
      
    </div>
  )
}

export default App
