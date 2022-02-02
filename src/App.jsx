import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Catalog from "./pages/Catalog";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/catalog"
            element={
              <Layout>
                <Catalog />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
