import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home";
import EBill from "./pages/Home Services/EBill";
import GasBill from "./pages/Home Services/GasBill";
import TelBill from "./pages/Home Services/TelBill";
import CivilServices from "./pages/Education/CivilServices";
import CaCs from "./pages/Education/CaCs";
import MedEng from "./pages/Education/MedEng";
import BloodBank from "./pages/Medicine/BloodBank";
import Instrument from "./pages/Medicine/Instrument";
import TestReport from "./pages/Medicine/TestReport";
import Contact from "./pages/Contact Us/Contact";
import Map from "./pages/Contact Us/Map";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ebill" element={<EBill />} />
          <Route path="/gasbill" element={<GasBill />} />
          <Route path="/telbill" element={<TelBill />} />
          <Route path="/civilservices" element={<CivilServices />} />
          <Route path="/cacs" element={<CaCs />} />
          <Route path="/medeng" element={<MedEng />} />
          <Route path="/bloodbank" element={<BloodBank />} />
          <Route path="/instrument" element={<Instrument />} />
          <Route path="/testreport" element={<TestReport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
