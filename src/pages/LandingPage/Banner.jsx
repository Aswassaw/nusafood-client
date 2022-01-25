import React from "react";
import Logo from "../../components/atoms/Logo";

export default function Banner() {
  return (
    <section className="banner mb-4">
      <div
        className="container-lg h-100 d-flex
            justify-content-center
            align-items-center"
      >
        <div className="text-center text-light">
          <h1 className="display-5 mb-4" style={{ lineHeight: "40px" }}>
            <span>Ayo Temukan Rasa Favoritmu Bersama</span>
            <br />
            <Logo size="65" />{" "}
            <span className="bottom-line text-itim display-4">NusaFood</span>
          </h1>
          <p className="d-none d-md-block  fs-5 mb-5">
            Kami Menyediakan Kenikmatan Rasa Yang Sempurna. Semuanya Disusun
            Dengan Komponen-Komponen Yang Menggugah Selera. Coba Sekali Dan Anda
            Akan Mengerti.
          </p>
          <div className="row">
            <div className="col">
              <button className="btn btn-lg btn-primary mx-2 mx-2">
                Cari Rasa
              </button>
              <button className="btn btn-lg btn-outline-info mx-2 mx-2">
                Buat Akun Baru
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
