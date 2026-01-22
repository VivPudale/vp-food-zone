import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchFilters from "./Components/SearchFilters";
import Hero from "./Components/Hero";

function App() {
  // const [count, setCount] = useState(0)
  const [filter, setFilter] = useState("");

  return (
    <>
      <NavBar/>
      <SearchFilters setFilter={setFilter} />
      <Hero filter={filter} />
    </>
  );
}

export default App;
