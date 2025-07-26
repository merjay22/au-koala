import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Common Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Home Sections
import HeroSlider from "./components/HeroSlider";
import CategorySection from "./components/CategorySection";
import BestsellersSection from "./components/BestsellersSection";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import AsSeenInSlider from "./components/AsSeenInSlider";
import MattressSection from "./components/MattressSection";
import KoalaSustainability from "./components/koalaSustainability";
import EmailSubscription from "./components/EmailSubscription";

// Pages
import Mattresses from "./Mattresses/Mattresses";
import SofaBeds from "./Sofa Beds/SofaBeds";
import Sofas from "./Sofas/Sofas";
import Outdoor from "./Outdoor/Outdoor";
import Bedroom from "./Bedroom/Bedroom";
import Livingroom from "./Livingroom/Livingroom";
import Clearance from "./Clearance/Clearance";
import AuthForm from "./Login/AuthForm";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        {/* Homepage with all sections */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <CategorySection />
              <BestsellersSection />
              <ImageGallery />
              <AsSeenInSlider />
              <MattressSection />
              <KoalaSustainability />
              <EmailSubscription />
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        
        {/* Product Pages */}
        <Route path="/mattresses" element={<Mattresses />} />
        <Route path="/sofa-beds" element={<SofaBeds />} />
        <Route path="/sofas" element={<Sofas />} />
        <Route path="/Outdoor" element={<Outdoor />} />
        <Route path="/Bedroom" element={<Bedroom />} />
        <Route path="/Livingroom" element={<Livingroom />} />
        <Route path="/Clearance" element={<Clearance />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
