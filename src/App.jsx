import {Routes, Route} from "react-router-dom";
import {UserLoginContextProvider} from "./context/UserLoginContext";
import LandinPage from "./views/LandingPage/LandingPage";
import Login from "./views/Login/Login";
import Layout from "./components/Layout";
import Home from "./views/Home/Home";
import CharacterDetails from "./views/Characters-Details/CharacterDetail";
import About from "./views/About/About";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import "./App.css";
import {roles} from "./const/roles";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

// import Search from "./components/Search/Search";

function App() {
  return (
    <UserLoginContextProvider>
      <Routes>
        <Route path="/" element={<LandinPage />} />
        {/* Rutas Públicas */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Rutas Privadas */}

        <Route
          path="home"
          element={<PrivateRoute allowedRoles={roles.ALL_USERS} />}
        >
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="character/:id" element={<CharacterDetails />} />
          </Route>
        </Route>

        <Route
          path="about"
          element={<PrivateRoute allowedRoles={roles.ADMIN} />}
        >
          <Route index element={<About />} />
        </Route>
      </Routes>
    </UserLoginContextProvider>
  );
}

export default App;

// return (
//   <BrowserRouter>
//     <AuthContextProvider>
//       <Routes>
//         <Route element={<PublicRoute />}>
//           <Route path=“/” element={<Landing />} />
//         </Route>
//         <Route element={<PrivateRoute />}>
//           <Route path=“/personajes”>
//             <Route index element={<Personajes />} />
//             <Route path=“:id” element={<DetallePersonaje />} />
//           </Route>
//         </Route>
//       </Routes>
//     </AuthContextProvider>
//   </BrowserRouter>
// );
// }
// export default App;
