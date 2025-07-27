import React from 'react'

export default function Contact() {
  return (<>
     <div className='vh-100 main'>
      <div className="mb-4">
        <div className="pt-3 container">
          <div className="text-center pt-4">
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder abouth'>conatct section</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>
              <div className='line1 me-3'></div>
              <i className="fa-solid fa-star"></i>
               <div className='line1 ms-3'></div>
            </div>
          </div>
          <form
  
  noValidate=""
  action=""
  className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid"
>

  <input
 
    id="userName"
    type="text"
    placeholder="userName"
    name="userName"
    className="mt-4 form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
    fdprocessedid="o8b83l"
  />

  <input
   
    id="userAge"
    type="text"
    placeholder="userAge"
    name="userName"
    className="mt-4 form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
    fdprocessedid="hwjv66"
  />

  <input
   
    id="userEmail"
    type="text"
    placeholder="userEmail"
    name="userName"
    className="mt-4 form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
    fdprocessedid="5z3qd5"
  />

  <input
  
    id="userPassword"
    type="text"
    placeholder="userPassword"
    name="userName"
    className="mt-4 form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
    fdprocessedid="zv23rf"
  />
  <button
   
    className="btn mt-4 text-white"
    style={{ backgroundColor: "#1abc9c" }}
    fdprocessedid="jhlh9"
  >
    {" "}
    send Message{" "}
  </button>
</form>

        </div>
      </div>
     </div>
  </>
  )
}
