import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import blue from "./blue.png";

export default function BestProduct() {
  return (
    <section id="projects" className="mb-4 semi semi-light">
      <div className="container-lg py-5">
        <h2 className="fw-bold text-center mb-3 mt-2">Produk Unggulan</h2>
        <div className="row">
          <div className="col-6 col-md-3 my-2">
            <div className="card shadow-sm h-100">
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={blue}
                  alt="Caesar Cipher Web App Thumbnail"
                />
              </div>
              <div className="card-body">
                <p className="fs-5 fw-bold card-title">Sate Ayam</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="#projects" className="btn btn-primary me-auto">
                    Detail
                  </a>
                  <div>
                    <a
                      href="https://caesarcipher1.netlify.app/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaShoppingCart /> <sup>+</sup>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <div className="card shadow-sm h-100">
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={blue}
                  alt="Caesar Cipher Web App Thumbnail"
                />
              </div>
              <div className="card-body">
                <p className="fs-5 fw-bold card-title">Sate Ayam</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="#projects" className="btn btn-primary me-auto">
                    Detail
                  </a>
                  <div>
                    <a
                      href="https://caesarcipher1.netlify.app/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaShoppingCart /> <sup>+</sup>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <div className="card shadow-sm h-100">
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={blue}
                  alt="Caesar Cipher Web App Thumbnail"
                />
              </div>
              <div className="card-body">
                <p className="fs-5 fw-bold card-title">Sate Ayam</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="#projects" className="btn btn-primary me-auto">
                    Detail
                  </a>
                  <div>
                    <a
                      href="https://caesarcipher1.netlify.app/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaShoppingCart /> <sup>+</sup>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <div className="card shadow-sm h-100">
              <div className="card-img">
                <img
                  className="img-fluid"
                  src={blue}
                  alt="Caesar Cipher Web App Thumbnail"
                />
              </div>
              <div className="card-body">
                <p className="fs-5 fw-bold card-title">Sate Ayam</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="#projects" className="btn btn-primary me-auto">
                    Detail
                  </a>
                  <div>
                    <a
                      href="https://caesarcipher1.netlify.app/"
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaShoppingCart /> <sup>+</sup>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
