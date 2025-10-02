import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



const images = [
       { original: "/static/nails1.jpg", thumbnail: "/static/nails1.jpg", originalAlt: "Nail Art 1" },
       { original: "/static/nails2.jpg", thumbnail: "/static/nails2.jpg", originalAlt: "Nail Art 2" },
       { original: "/static/nails3.jpg", thumbnail: "/static/nails3.jpg", originalAlt: "Nail Art 3" },
       { original: "/static/nails4.jpg", thumbnail: "/static/nails4.jpg", originalAlt: "Nail Art 4" },
       { original: "/static/nails5.jpg", thumbnail: "/static/nails5.jpg", originalAlt: "Nail Art 5"   },
]
const NailGallery : React.FC = () => {
  return (
    <div>
      <Gallery items={images} />
    </div>
  );
}
export default NailGallery;