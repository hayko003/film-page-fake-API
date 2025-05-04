import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectFilmThunk } from "../../store/slices/Films/selectFilmSlice";
import { setBackground } from "../../store/slices/backgroundSlice/backgroundSlice";
import { useParams } from "react-router-dom";
import "./aboutFilms.css";

function AboutFilm(): any {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.oneFilm);

  useEffect(() => {
    dispatch(selectFilmThunk(Number(id)));
  }, [id]);

  const handleClick = () => {
    dispatch(
      setBackground(
        `https://image.tmdb.org/t/p/original${result.backdrop_path}`
      )
    );
  };

  return (
    <section
      style={{
        backgroundImage: result?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${result.backdrop_path})`
          : undefined,
      }}
      className="films"
    >
      <div className="films_wrap">
        {result && (
          <div className="all_Wrap">
            <div className="aboutFilm_wrap">
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
              />
            </div>
            <div className="aboutFilm_content">
              <h1 className="title_h1_film">{result.title}</h1>
              <p>Rating: {result.vote_average}</p>
              <p>{result.overview}</p>
            </div>
          </div>
        )}
      <iframe
        // src={`https://www.youtube.com/embed/${result.trailerKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </section>
  );
}

export default AboutFilm;
