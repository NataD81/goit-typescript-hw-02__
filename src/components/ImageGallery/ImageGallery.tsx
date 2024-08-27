import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: any) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={s.imageGalleryItem}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
