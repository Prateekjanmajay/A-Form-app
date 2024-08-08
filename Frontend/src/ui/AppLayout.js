import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../index.css";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
