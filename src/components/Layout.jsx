import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Title from "./Title/Title";
import Carrusel from "./Carrusel/Carrusel";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Title />
      <Carrusel />
      <Outlet />
      <Footer />
    </>
  );
}
