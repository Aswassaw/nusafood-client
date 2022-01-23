import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Social() {
  return (
    <section className="d-flex align-items-center justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Terhubung dengan kami di jejaring sosial:</span>
      </div>

      <div>
        <a
          href="#!"
          className="mx-2 btn py-2 text-white rounded-circle shadow"
          style={{ backgroundColor: "#44BE53" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="#!"
          className="mx-2 btn py-2 text-white rounded-circle shadow"
          style={{ backgroundColor: "#3b5998" }}
        >
          <FaFacebookF />
        </a>
        <a
          href="#!"
          className="mx-2 btn py-2 text-white rounded-circle shadow"
          style={{ backgroundColor: "#ac2bac" }}
        >
          <FaInstagram />
        </a>
        <a
          href="#!"
          className="mx-2 btn py-2 text-white rounded-circle shadow"
          style={{ backgroundColor: "#0082ca" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="#!"
          className="mx-2 btn py-2 text-white rounded-circle shadow"
          style={{ backgroundColor: "#333333" }}
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
