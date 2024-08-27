export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: {
    urls: { regular: string };
    alt_description: string;
  };
}
