import React, { useEffect } from "react";
import "./Header.css";
import { getGenres } from "../../store/slices/genreSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Btn from "../ui/Btn";

function Header() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genres);
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
        {genres.map((genre) => {
          return <Btn key={genre.id} genre={genre} />;
        })}
      </nav>
      <div>
      </div>
    </header>
  );
}

export default Header;
