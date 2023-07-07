import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Title from "./Title/Title";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Title />
      <Outlet />
      <Footer />
    </>
  );
}
