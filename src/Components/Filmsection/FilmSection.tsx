import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getFilmsThunk } from "../../store/slices/Films/FilmSlice";
import "./FilmSection.css";
import { NavLink } from "react-router-dom";

function FilmSection() {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.films);
  useEffect(() => {
    dispatch(getFilmsThunk(1));
  }, []);

  return (
    <section className="films">
      <div className="films_wrap">
        {result.map((res: { id: any; poster_path: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
          return (
            <NavLink to={`/films/${res.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
                width={200}
              />
              <h1 style={{"color": "black", "fontSize": "16px"}}>{res.title}</h1>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default FilmSection;
