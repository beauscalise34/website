import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import Home from './pages/Home'
import FlakeEpoxy from './pages/FlakeEpoxy'
import MetallicEpoxy from './pages/MetallicEpoxy'
import CommercialEpoxy from './pages/CommercialEpoxy'
import PatioOutdoor from './pages/PatioOutdoor'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import CityCypress from './pages/CityCypress'
import CityKaty from './pages/CityKaty'
import CityWoodlands from './pages/CityWoodlands'
import CitySpring from './pages/CitySpring'
import CitySugarLand from './pages/CitySugarLand'
import CityTomball from './pages/CityTomball'
import NotFound from './pages/NotFound'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/flake-epoxy-garage-floors" element={<FlakeEpoxy />} />
        <Route path="/services/metallic-epoxy-floors" element={<MetallicEpoxy />} />
        <Route path="/services/commercial-warehouse-flooring" element={<CommercialEpoxy />} />
        <Route path="/services/patio-outdoor-coatings" element={<PatioOutdoor />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/locations/cypress-tx" element={<CityCypress />} />
        <Route path="/locations/katy-tx" element={<CityKaty />} />
        <Route path="/locations/the-woodlands-tx" element={<CityWoodlands />} />
        <Route path="/locations/spring-tx" element={<CitySpring />} />
        <Route path="/locations/sugar-land-tx" element={<CitySugarLand />} />
        <Route path="/locations/tomball-tx" element={<CityTomball />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <StickyCTA />
    </BrowserRouter>
  )
}
