import "./App.css";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home/Home";
import CharacterDetails from "./views/Characters-Details/CharacterDetail";
// import Search from "./components/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
