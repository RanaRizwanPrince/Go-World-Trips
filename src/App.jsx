import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Preloader from './Components/Preloader';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Schengen_Visa from './Pages/Schengen_Visa';
import Footer from './Components/Footer';
import MouseFollower from './Components/MouseFollower';
import ScrollToTopButton from './Components/ScrollToTopButton';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true,       // ek dafa animate ho
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <MouseFollower />
      <Navbar />
      <Preloader />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Schengen_Visa' element={<Schengen_Visa />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App