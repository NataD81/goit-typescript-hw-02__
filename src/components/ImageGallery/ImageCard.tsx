import React from "react";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    urls: { small: string };
    alt_description: string;
  };
  openModal: (image: any) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={s.imageCard} onClick={() => openModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.imageCardImg}
      />
    </div>
  );
};

export default ImageCard;
