import React from 'react'
import './Portfolio.css'
import cabin from '../portfolio/cabin.png'
import cake from '../portfolio/cake.png'
import circus from '../portfolio/circus.png'
import game from '../portfolio/game.png'
import safe from '../portfolio/safe.png'
import submarine from '../portfolio/submarine.png'
export default function Portfolio() {
  return (
    <div className="container mt-5 py-5 text-center ">
      <h2 className='fs-1'>PORTFOLIO</h2>
     
      <div className="p-icon d-flex justify-content-center mb-5">
    <div className="p-icon-content">
       <i class="fa-solid fa-star fa-2xl"></i>
    </div>
   
   </div>

<div className="row gy-4 mt-4">
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={cabin} alt="" className='w-100' />
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={cake} alt="" className='w-100' />
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={circus} alt="" className='w-100' />
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={game} alt="" className='w-100' />
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={safe} alt="" className='w-100' />
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="p-item">
      <div className="p-item-caption  align-items-center justify-content-center">
  <div className="p-item-icon">
  <i class="fa-solid fa-plus"></i>
  </div>
      </div>
      <img src={submarine} alt="" className='w-100' />
    </div>
  </div>
  

</div>
    </div>
  )
}
