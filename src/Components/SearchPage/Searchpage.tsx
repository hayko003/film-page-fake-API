import { useAppSelector } from "../../hooks/hooks";
import { NavLink } from "react-router-dom";
import "./SearchPage.css"
function SearchPage() {
  const { searchResults, searchQuery } = useAppSelector((state) => state.searchedFilm);

  return (
    <section className="search-results">
      <h2>Search results for: "{searchQuery}"</h2>

      {searchResults.length > 0 ? (
        <div className="search-grid film-item">
          {searchResults.map((film) => (
            <NavLink to={`/films/${film.id}`} key={film.id} className="film-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                width={200}
                alt={film.title}
              />
              <h3 className="h3_title">{film.title}</h3>
            </NavLink>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
}

export default SearchPage;
