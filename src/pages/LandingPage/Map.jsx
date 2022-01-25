import React from "react";

export default function Map() {
  return (
    <section className="mb-4">
      <h2 className="fw-bold text-center mb-3 mt-2">Peta Lokasi</h2>
      <div className="map-container mt-4">
        <iframe
          src="https://maps.google.com/maps?q=trenggalek&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
          title="Alamat NusaFood"
        ></iframe>
      </div>
    </section>
  );
}
