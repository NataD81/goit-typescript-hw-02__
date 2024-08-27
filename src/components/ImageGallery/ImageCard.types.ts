export interface ImageCardProps {
  image: {
    urls: { small: string };
    alt_description: string;
  };
  openModal: (image: any) => void;
}
