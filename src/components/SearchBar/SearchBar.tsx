import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
