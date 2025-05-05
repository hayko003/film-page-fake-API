import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectFilmThunk } from "../../store/slices/Films/selectFilmSlice";
import { setBackground } from "../../store/slices/backgroundSlice/backgroundSlice";
import { useParams } from "react-router-dom";
import styles from "./AboutFilm.module.css";
function AboutFilm() {
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
      className={styles.aboutFilmContainer}
    >
      <div className={styles.aboutFilmWrap}>
        {result && (
          <div className={styles.aboutFilmContent}>
            <div className={styles.posterContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
                className={styles.posterImage}
              />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.filmTitle}>
                {result.title} 
                <span className={styles.ageRating}>18+</span>
              </h1>
              <p className={styles.filmRating}>Rating: {result.vote_average}/10</p>
              <p className={styles.filmOverview}>{result.overview}</p>
              
              <div className={styles.actionButtons}>
                <button className={styles.watchButton}>Watch the movie</button>
                <button className={styles.secondaryButton}>Trailer</button>
              </div>
              
              <div className={styles.metaInfo}>
                <p><strong>Release date:</strong> {result.release_date}</p>
                <p><strong>Genre:</strong> {result.genres?.map(g => g.name).join(', ')}</p>
              </div>
            </div>
          </div>
        )}
{/*         
        <iframe
          className={styles.trailerIframe}
          title="Трейлер"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
      </div>
    </section>
  );
}

export default AboutFilm;