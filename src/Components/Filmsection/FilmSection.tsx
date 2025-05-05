import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getFilmsThunk } from "../../store/slices/Films/FilmSlice";
import "./FilmSection.css";
import { NavLink } from "react-router-dom";

function FilmSection() {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.films);
  const { searchResults } = useAppSelector((state) => state.searchedFilm);
  const displayedFilms = searchResults.length > 0 ? searchResults : result;

  useEffect(() => {
    dispatch(getFilmsThunk(1));
  }, []);

  return (
    <section className="films">
      <div className="films_wrap">
        {result.map((res) => (
          <NavLink to={`/films/${res.id}`} key={res.id} className="film-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              width={200}
              alt={res.title}
            />
            <h1 className="h1_title">{res.title}</h1>
          </NavLink>
        ))}
        {displayedFilms.map((res) => (
          <NavLink to={`/films/${res.id}`} key={res.id} className="film-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              width={200}
              alt={res.title}
            />
            <h1 className="h1_title">{res.title}</h1>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default FilmSection;
