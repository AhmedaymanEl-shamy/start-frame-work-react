import React from "react";
import img1 from "../../../public/imgi_1_poert1.png";
import img2 from "../../../public/imgi_2_port2.png";
import img3 from "../../../public/imgi_3_port3.png";
export default function Porrfolio(){
  return (
    <>
      <div>
        <div className="mb-4">
          <div className="pt-5 container">
            <div className="text-center pt-5">
              <h2 className="text-uppercase mb-3 mt-3 fs-1 fw-bolder abouth">
                portfolio component
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line1 me-3"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line1 ms-3"></div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div>
      <div class="modal-header">
            <img class="w-100 d-block" src={img1} alt=""/>
      </div>
      <div class="modal-body mt-5">

      </div>
    </div>
  </div>
</div>
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3 " src={img1} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <div class="modal fade mt-5" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div>
      <div class="modal-header">
            <img class="w-100 d-block" src={img2} alt=""/>
      </div>
      <div class="modal-body mt-5">

      </div>
    </div>
  </div>
</div>
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={img2} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                <div class="modal fade mt-5" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div>
      <div class="modal-header">
            <img class="w-100 d-block" src={img3} alt=""/>
      </div>
      <div class="modal-body mt-5">

      </div>
    </div>
  </div>
</div>
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={img3} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={img2} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={img3} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="rounded-3 overflow-hidden position-relative">
                  <img alt="" className="w-100 rounded-3" src={img1} />
                  <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
          <img className="imgsize" alt="" src="../../../public/imgi_2_port2.png" />
        </div>
      </div>
    </>
  );
}
