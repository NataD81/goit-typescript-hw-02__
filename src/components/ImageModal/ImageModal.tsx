import Modal from "react-modal";
import s from "./ImageModal.module.css";
import React from "react";
import { Image } from "../../types/types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
    image: Image;
  };


const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
      contentLabel="Image Modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;
