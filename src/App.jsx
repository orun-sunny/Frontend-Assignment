import { useState } from 'react'
import './App.css'
import Hero from './Component/Hero'
import Explore from './Component/Explore'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
     <Hero></Hero>
     <Explore></Explore>
    </>
  )
}

export default App
