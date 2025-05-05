import { useEffect, useState, KeyboardEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getGenres } from "../../store/slices/genreSlice";
import filmlogo from "../../assets/filmlogo.png";
import "./Header.css";
import { clearSearch, getSearchedFilms } from "../../store/slices/searchFilm/searchFilmsSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genres);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGenres());
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(getSearchedFilms(query));
      navigate("/search");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header_h3">
        <img style={{ width: "150px" }} src={filmlogo} alt="Film Logo" />
      </div>
      <nav className="nav_wrap">
        <select className="styled-select">
          <option value="" disabled selected>
            Genre
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </nav>
    </header>
  );
}

export default Header;
