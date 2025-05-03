import React, { useEffect } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/slices/genreSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Btn from "../ui/Btn";
// import { getGenres } from "../store/slices/genreSlice";
function Header() {
  const dispatch = useAppDispatch();
  const {genres} = useAppSelector((state) => state.genres)
  console.log(genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <header className="header">
      <div className="header_h3">
        <h3>CinemaStar</h3>
      </div>
      <nav className="nav_wrap">
        {
          genres.map((genre) => {
            return <Btn key={genre.id} genre={genre}/>
          })
        }
      </nav>
    </header>
  );
}

export default Header;
