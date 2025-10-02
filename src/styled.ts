import styled from 'styled-components';


export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-radius: 50px;
`;

export const NailGalleryContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .image-gallery-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .image-gallery-thumbnails-container {
    background: #f8f8f8;
    padding: 10px 0;
  }

  .image-gallery-thumbnail img {
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border 0.3s;
  }

  .image-gallery-slide {
    height: auto !important;
  }
`;
export const NailGalleryHeader = styled.h2`
  text-align: center;
  margin: 0.1rem;
  font-family: 'Zalando Sans Expanded', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: #333;
`;

