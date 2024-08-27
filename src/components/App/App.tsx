import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import s from "./App.module.css";
import React from "react";
import { FetchImagesResponse, Image } from "../../types/types"

const ACCESS_KEY = "Mt8-8IPpq1emOqYEqNkvEgtQDZJ-h2J5CjyYF2WE_M4";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<FetchImagesResponse>("https://api.unsplash.com/search/photos", {
          params: { query, page, per_page: 12 },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });

        setImages((prevImages) => [...prevImages, ...res.data.results]);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
