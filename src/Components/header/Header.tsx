import { useEffect } from "react";
import { getGenres } from "../../store/slices/genreSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Btn from "../ui/Btn";
import filmlogo from "../../assets/filmlogo.png";
import "./Header.css";

function Header() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <header className="header">
      <div className="header_h3">
        <img style={{ width: "150px" }} src={filmlogo} />
      </div>
      <nav className="nav_wrap">
        <select className="styled-select" >
          <option value="" disabled>
            Genre
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}

export default Header;
