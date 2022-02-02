import "./style/LandingPage.css";
import React, { useEffect } from "react";
import Banner from "../../components/organisms/Banner";
import BestProduct from "../../components/organisms/BestProduct";
// import Map from "../../components/organisms/Map";

export default function LandingPage() {
  useEffect(() => {
    document.title = "NusaFood - Heaven Of Taste";
  }, []);

  return (
    <main>
      <Banner />
      <BestProduct />
      {/* <Map /> */}
    </main>
  );
}
