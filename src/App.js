import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import LayOut from './components/layout/LayOut'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'



let routers = createBrowserRouter([{
  path:"",element: <LayOut />,children:[
    {index:true,element: <Home />},
    {path:"home",element: <Home />},
    {path:"about",element: <About />},
    {path:"portfolio",element: <Portfolio />},
    {path:"contact",element: <Contact />},
  ]
}])



export default function App() {
  return (
    <>
    
  
   <RouterProvider router={routers}></RouterProvider>


   </>
  )
}





