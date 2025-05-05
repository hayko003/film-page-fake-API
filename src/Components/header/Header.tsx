import { useEffect, useState } from "react";
import { getGenres } from "../../store/slices/genreSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import filmlogo from "../../assets/filmlogo.png";
import "./Header.css";
import { getSearchedFilms } from "../../store/slices/searchFilm/searchFilmsSlice";

function Header() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const [query, setQuery] = useState("");

  const searchMovie = () => {
    if (query.trim() !== "") {
      dispatch(getSearchedFilms(query));
    }
  };
  return (
    <header className="header">
      <div className="header_h3">
        <img style={{ width: "150px" }} src={filmlogo} />
      </div>
      <nav className="nav_wrap">
        <select className="styled-select">
          <option value="" disabled>
            Genre
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={searchMovie}>Searc</button>
      </nav>
    </header>
  );
}

export default Header;
