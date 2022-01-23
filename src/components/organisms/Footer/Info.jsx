import React from "react";
import Logo from "../../atoms/Logo";

export default function Info() {
  return (
    <section>
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="mb-4 text-itim fs-5">
              <Logo size={35} /> NusaFood
            </h6>
            <p>
              Di sini anda akan merasakan sebuah surga rasa, dimana terdapat
              begitu banyak makanan lezat yang bervariasi. Segeralah
              berlangganan bersama kami dan rasakan nikmatnya hidup.
            </p>
          </div>
          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Produk</h6>
            <p>
              <a href="#!" className="text-reset">
                Sate Ayam
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Bakso
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Nasi Goreng
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Mie Pangsit
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Jalan Pintas</h6>
            <p>
              <a href="#!" className="text-reset">
                Profile
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Browse
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Cart
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Kontak</h6>
            <p>
              <i className="fas fa-home"></i>
              <a
                href="https://goo.gl/maps/b8pznZJQtrmyRWBU9"
                className="text-reset"
                target="_blank"
                rel="noReferrer"
              >
                Trenggalek, 66372
              </a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a
                href="mailto:andrypeb227@gmail.com"
                className="text-reset"
                target="_blank"
                rel="noReferrer"
              >
                andrypeb227@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a
                href="tel:+62-85637645364"
                className="text-reset"
                target="_blank"
                rel="noReferrer"
              >
                +62-85637645364
              </a>
            </p>
            <p>
              <i className="fas fa-print"></i>
              <a
                href="tel:+62-83463546352"
                className="text-reset"
                target="_blank"
                rel="noReferrer"
              >
                +62-83463546352
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
