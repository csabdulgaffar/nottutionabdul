import { BrowserRouter, Routes, Route } from "react-router-dom"

import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import OurFeatures from "./pages/OurFeatures"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"

import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-features" element={<OurFeatures />} />
          <Route path="/login" element={<Login />} />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App