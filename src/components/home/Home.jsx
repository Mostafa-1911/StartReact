import React from 'react'
import './Home.css'
import boy from './boy.bmp'
export default function Home() {
  return (
    <>
    
    <div className="container-fluid vh-100 d-flex align-items-center">
        <div class="container d-flex justify-content-center">
                
               <div className="d-flex flex-column align-items-center">

              <img src={boy} alt="" className='mb-4'/>

                <h1 class="masthead-heading text-uppercase mb-0 text-white">Start React</h1>
<div className="star my-4">
  <i class="fa-solid fa-star fa-2xl text-white"></i>
</div>
                

                <p class="masthead-subheading font-weight-light mb-0 text-white">Graphic Artist - Web Designer - Illustrator</p>
               </div>
               
                
            </div>
    </div>
    
    
    </>
  )
}
