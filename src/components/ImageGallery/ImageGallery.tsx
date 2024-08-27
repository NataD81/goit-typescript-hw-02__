import React from "react";
import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../types/types"; 

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
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
