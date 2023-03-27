import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Footer() {
  return (
    <>
    
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
<h4 className='fs-3 mb-3'>LOCATION</h4>
<p className='fs-4 px-5'>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h4 className='fs-3 mb-3'>AROUND THE WEB</h4>
            <div className="social-icons text-center">
          <a href="" className='m-2'>
          <i class="fa-brands fa-facebook fa-2xl text-white "></i>
          </a>
          <a href="" className='m-2'>
          <i class="fa-brands fa-twitter fa-2xl text-white "></i>
          </a>
          <a href="" className='m-2'>
          <i class="fa-brands fa-linkedin fa-2xl text-white"></i>
          </a>
          <a href="" className='m-2'>
          <i class="fa-brands fa-dribbble fa-2xl text-white"></i>
          </a>
          </div>
            </div>
            <div className="col-md-4 text-center">
            <h4 className='fs-3 mb-3'>ABOUT FREELANCER</h4>
            <p className='fs-4 px-2'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      </div>
     
        
    </footer>
     <div className="copyright bg-dark text-white text-center">
        <p className='p-4'>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
