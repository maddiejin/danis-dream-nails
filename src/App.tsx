import {Routes, Route, Link} from "react-router-dom";
import styled from "styled-components";

import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';

import "react-image-gallery/styles/css/image-gallery.css";
import './App.css'

const NavBar = styled.nav`
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
`;

function App() {
  return (<>
      <NavBar>
        <Link to="/">Gallery</Link>
        <Link to= "/services"> Services</Link>
        <Link to= "/booking"> Booking</Link>
        <Link to= "/payment"> Payment</Link>
        </NavBar>
      
      <Routes>
        <Route path="/" element={<GalleryPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>

    </>
  );
}

export default App;
