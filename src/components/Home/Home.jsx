import React from 'react'
import img from '../../../public/imgi_1_avataaars.svg'
export default function Home() {
  return (
    <div className='main'>
      <div className="home vh-100 d-flex justify-content-center align-items-center text-white">
        <div className="text-center">
            <img className='w-75' src={img} alt="" />
          <div className='text-center pt-4 '>
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className='line me-3'></div>
              <i className="fa-solid fa-star"></i>
               <div className='line ms-3'></div>
            </div>
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </div>
  )
}
