import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './assets/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Nav></Nav>
            <Hero></Hero>
            <Footer></Footer>
          </>
          
        }></Route>
      </Routes>
    </>
  )
}

export default App
