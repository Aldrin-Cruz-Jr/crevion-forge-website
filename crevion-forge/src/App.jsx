import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import Templates from './Templates'
import AppDev from './AppDev'
import ProductizedServices from './ProductizedServices'
function App() {


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
        <Route path="/templates" element={
          <>
            <Nav></Nav>
            <Templates></Templates>
            <Footer></Footer>
          </>
        }></Route>
        <Route path='/appdev' element={
          <>
            <Nav></Nav>
            <AppDev></AppDev>
            <Footer></Footer>
          </>
        }></Route>
        <Route path='/productizedservices' element={
          <>
            <Nav></Nav>
            <ProductizedServices></ProductizedServices>
            <Footer></Footer>
          </>
        }></Route>
      </Routes>
    </>
  )
}

export default App
