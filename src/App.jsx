import './App.css';
import { IoLogoWhatsapp } from "react-icons/io";
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
import Faq from './Pages/Faq'
import Footer from './Components/Footer';
import MouseFollower from './Components/MouseFollower';
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UnderConstruction from './Pages/UnderConstruction';
import France from './Pages/Schengen_Visa/France';
import Belgium from './Pages/Schengen_Visa/Belgium';
import Austria from './Pages/Schengen_Visa/Austria';
import Italy from './Pages/Schengen_Visa/Italy';
import Spain from './Pages/Schengen_Visa/Spain';
import Bulgaria from './Pages/Schengen_Visa/Bulgaria';
import Croatia from './Pages/Schengen_Visa/Croatia';
import Czech from './Pages/Schengen_Visa/Czech';
import Denmark from './Pages/Schengen_Visa/Denmark';
import Estonia from './Pages/Schengen_Visa/Estonia';
import Finland from './Pages/Schengen_Visa/Finland';
import Germany from './Pages/Schengen_Visa/Germany';
import Greece from './Pages/Schengen_Visa/Greece';
import Hungary from './Pages/Schengen_Visa/Hungary';
import Iceland from './Pages/Schengen_Visa/Iceland';
import Latvia from './Pages/Schengen_Visa/Latvia';
import Liechtenstein from './Pages/Schengen_Visa/Liechtenstein';
import Lithuania from './Pages/Schengen_Visa/Lithuania';
import Luxembourg from './Pages/Schengen_Visa/Luxembourg';
import Malta from './Pages/Schengen_Visa/Malta';
import Netherlands from './Pages/Schengen_Visa/Netherlands';
import Norway from './Pages/Schengen_Visa/Norway';
import Poland from './Pages/Schengen_Visa/Poland';
import Portugal from './Pages/Schengen_Visa/Portugal';
import Romania from './Pages/Schengen_Visa/Romania';
import Slovakia from './Pages/Schengen_Visa/Slovakia';
import Sweden from './Pages/Schengen_Visa/Sweden';
import Slovenia from './Pages/Schengen_Visa/Slovenia';
import Switzerland from './Pages/Schengen_Visa/Switzerland';
import HomePopup from './Components/HomePopup.jsx';
import Terms_Conditions from "./Components/Terms_Conditions";
import Our_Services from "./Components/Our_Services";
import Best_Tour_Guide from "./Pages/Best_Tour_Guide";
import Tour_Booking from "./Pages/Tour_Booking";
import Hotel_Booking from "./Pages/Hotel_Booking";
import Ticket_Booking from "./Pages/Ticket_Booking";
import Rental_Services from "./Pages/Rental_Services";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <HomePopup />
      <a href="https://wa.me/447311132376" target="_blank"><IoLogoWhatsapp className="whatsapp"/>  </a>
      <MouseFollower />
      <Navbar />
      <Preloader />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='//Faq' element={<Faq />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/France' element={<France />} />
        <Route path='/Belgium' element={<Belgium />} />
        <Route path='/Austria' element={<Austria />} />
        <Route path='/Italy' element={<Italy />} />
        <Route path='/Spain' element={<Spain />} />
        <Route path='/Bulgaria' element={<Bulgaria />} />
        <Route path='/Croatia' element={<Croatia />} />
        <Route path='/Croatia' element={<Croatia />} />
        <Route path='/Czech' element={<Czech />} />
        <Route path='/Denmark' element={<Denmark />} />
        <Route path='/Estonia' element={<Estonia />} />
        <Route path='/Finland' element={<Finland />} />
        <Route path='/Germany' element={<Germany />} />
        <Route path='/Greece' element={<Greece />} />
        <Route path='/Hungary' element={<Hungary />} />
        <Route path='/Iceland' element={<Iceland />} />
        <Route path='/Latvia' element={<Latvia />} />
        <Route path='/Liechtenstein' element={<Liechtenstein />} />
        <Route path='/Lithuania' element={<Lithuania />} />
        <Route path='/Luxembourg' element={<Luxembourg />} />
        <Route path='/Malta' element={<Malta />} />
        <Route path='/Netherlands' element={<Netherlands />} />
        <Route path='/Norway' element={<Norway />} />
        <Route path='/Poland' element={<Poland />} />
        <Route path='/Portugal' element={<Portugal />} />
        <Route path='/Romania' element={<Romania />} />
        <Route path='/Slovakia' element={<Slovakia />} />
        <Route path='/Slovenia' element={<Slovenia />} />
        <Route path='/Sweden' element={<Sweden />} />
        <Route path='/Switzerland' element={<Switzerland />} />
        <Route path="*" element={<UnderConstruction />} />
        <Route path='/Schengen_Visa' element={<Schengen_Visa />} />
        <Route path='/Terms_Conditions' element={<Terms_Conditions />} />
        <Route path='/Our_Services' element={<Our_Services />} />
        <Route path='/Best_Tour_Guide' element={<Best_Tour_Guide />} />
        <Route path='/Tour_Booking' element={<Tour_Booking />} />
        <Route path='/Hotel_Booking' element={<Hotel_Booking />} />
        <Route path='/Ticket_Booking' element={<Ticket_Booking />} />
        <Route path='/Rental_Services' element={<Rental_Services />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App