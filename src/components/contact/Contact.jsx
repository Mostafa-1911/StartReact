import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <>
    <div className="container text-center mb-5">
      
      <h2 className='mt-5 pt-5 fs-1 mb-3'>CONTACT ME</h2>     

       <div className="contact-icon d-flex justify-content-center mb-5">
<div className="contact-icon-content">
<i class="fa-solid fa-star fa-2xl"></i>
</div>
       </div>

   <div className="row mb-5">
    <div className="col-md-8 mx-auto text-start mb-5">
      <form>
      <div class="mb-3">
    <input type="text" class="form-control p-3" id="exampleInputName1" placeholder='Name'/>
  </div>
  <div class="mb-3">
    <input type="email" class="form-control p-3" id="exampleInputEmail1" placeholder='Email address' aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="number" class="form-control p-3" id="exampleInputPhoneNumber1" placeholder='Phone Number'/>
  </div>
  <div class="mb-3">
    <textarea className='form-control p-3' id="" cols="20" rows="10" placeholder='Message'></textarea>
  </div>
 
  <button type="submit" class="btn btn-success ">Submit</button>
</form>
    </div>
   



   </div>


    </div>
    
    
    
    </>
  )
}
