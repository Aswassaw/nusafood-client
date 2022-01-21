import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../Navbar/Partial/Logo";

export default function Footer() {
  const renderFooter = () => (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Terhubung dengan kami di jejaring sosial:</span>
        </div>

        <div>
        <a
            href="#!"
            className="mx-2 btn btn-sm text-white rounded-circle shadow"
            style={{ backgroundColor: "#44BE53" }}
          >
            <FaWhatsapp />
          </a>
          <a
            href="#!"
            className="mx-2 btn btn-sm text-white rounded-circle shadow"
            style={{ backgroundColor: "#3b5998" }}
          >
            <FaFacebookF />
          </a>
          <a
            href="#!"
            className="mx-2 btn btn-sm text-white rounded-circle shadow"
            style={{ backgroundColor: "#ac2bac" }}
          >
            <FaInstagram />
          </a>
          <a
            href="#!"
            className="mx-2 btn btn-sm text-white rounded-circle shadow"
            style={{ backgroundColor: "#0082ca" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="#!"
            className="mx-2 btn btn-sm text-white rounded-circle shadow"
            style={{ backgroundColor: "#333333" }}
          >
            <FaGithub />
          </a>
        </div>
      </section>

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
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
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
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
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

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright &copy; {new Date().getFullYear()} NusaFood - Developed with{" "}
        <span className="text-danger">🖤</span> by{" "}
        <a
          href="https://github.com/andry-pebrianto"
          target="_blank"
          rel="noReferrer"
          className="text-reset"
        >
          Andry Pebrianto
        </a>{" "}
        in Trenggalek
      </div>
    </footer>
  );

  return <>{renderFooter()}</>;
}
