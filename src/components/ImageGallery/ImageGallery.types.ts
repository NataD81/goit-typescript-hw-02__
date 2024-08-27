export interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: any) => void;
}
