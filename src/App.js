import React from "react";
import "./App.css";
import Footer from "./footer";
import Header from "./header";
import MainContent from "./main";
import { AboutUs } from "./Pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GalleryPage } from "./Pages/GallleryPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={MainContent} />
          <Route path="gallery" Component={GalleryPage} />
          <Route path="aboutUs" Component={AboutUs} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
