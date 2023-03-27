import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../NavBar/NavBar'


export default function LayOut() {
  return (
    <>
    
    <NavBar />
    
  
    <Outlet></Outlet>
    
    <Footer />

    </>
  )
}
