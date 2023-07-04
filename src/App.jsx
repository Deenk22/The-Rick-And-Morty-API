import {Routes, Route} from "react-router-dom";
import {UserLoginContextProvider} from "./context/UserLoginContext";
import LandinPage from "./views/LandingPage/LandingPage";
import Login from "./views/Login/Login";
import Layout from "./components/Layout";
import Home from "./views/Home/Home";
import CharacterDetails from "./views/Characters-Details/CharacterDetail";
import About from "./views/About/About";
import "./App.css";

// import Search from "./components/Search/Search";

function App() {
  return (
    <UserLoginContextProvider>
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="/:id" element={<CharacterDetails />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserLoginContextProvider>
  );
}

export default App;
