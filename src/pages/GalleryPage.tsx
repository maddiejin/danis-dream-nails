import React from 'react';
import NailGallery from '../components/Gallery';
import { PageContainer, NailGalleryContainer, NailGalleryHeader } from '../styled';


const GalleryPage: React.FC = () => {
  return (
    <div>
        <PageContainer>
            <NailGalleryHeader>gallery</NailGalleryHeader>
            <NailGalleryContainer>
                <NailGallery />
            </NailGalleryContainer>
      </PageContainer>
    </div>
  );
}

export default GalleryPage;