import Header from "./Components/header/Header";
import "./App.css";
import { useAppDispatch } from "./hooks/hooks";
import { useEffect } from "react";
import { getFilmsThunk } from "./store/slices/Films/FilmSlice";
import FilmSection from "./Components/Filmsection/FilmSection"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilmsThunk(1))
  }, [])
  return (
    <div className="App">
      <Header />
      <FilmSection/>
    </div>
  );
}

export default App;
