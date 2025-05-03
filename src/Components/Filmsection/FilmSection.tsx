import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getFilmsThunk } from "../../store/slices/Films/FilmSlice";
import "./FilmSection.css"

function FilmSection() {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.films);
  useEffect(() => {
    dispatch(getFilmsThunk(1));
  }, []);
  return (
    <section className="films">
      <div className="films_wrap">
        {result.map((res) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                alt={res.title}
                width={200}
              />
              <h1>{res.title}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FilmSection;
