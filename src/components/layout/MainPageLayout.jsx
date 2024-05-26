import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.jsx";

const MainPageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPageLayout;
