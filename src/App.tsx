import Header from "./Components/header/Header";
import { useAppDispatch } from "./hooks/hooks";
import { useEffect } from "react";
import { getFilmsThunk } from "./store/slices/Films/FilmSlice";
import FilmSection from "./Components/Filmsection/FilmSection";
import "./App.css";
import AboutFilm from "./Components/aboutFilm/aboutFilm";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsThunk(1));
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FilmSection />} />
        <Route path="/films/:id" element={<AboutFilm />} />
      </Routes>
    </div>
  );
}

export default App;
