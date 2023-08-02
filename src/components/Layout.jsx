import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  // const location = useLocation();
  // const withOutTitle = ["/character/:id", "/about"];
  // const findAndRemove = withOutTitle.some((route) =>
  // location.pathname.includes(route)
  // );
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
