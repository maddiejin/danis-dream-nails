import {Routes, Route, Link} from "react-router-dom";
import styled from "styled-components";
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import NailGallery from './components/Gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { PageContainer, NailGalleryContainer, NailGalleryHeader } from './styled';
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
        </NavBar>
      
      <Routes>
        <Route path="/" element={<GalleryPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>

    </>
  );
}

export default App;
