import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FixedDonateButton from "./FixedDonationButton";
import Footer from "./footer";
import Header from "./header";
import MainContent from "./main";
import { AboutUs } from "./Pages/AboutUs";
import Donate from "./Pages/Donate";
import { Events } from "./Pages/Events";
import { GalleryPage } from "./Pages/GallleryPage";
import JoinUs from "./Pages/JoinUs";
import Program from "./Pages/Progam";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={MainContent} />
          <Route path="Events" Component={Events} />
          <Route path="gallery" Component={GalleryPage} />
          <Route path="aboutUs" Component={AboutUs} />
          <Route path="joinUs" Component={JoinUs} />
          <Route path="Donate" Component={Donate} />
          <Route path="program" Component={Program} />
        </Routes>
        <Footer />
        <FixedDonateButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
