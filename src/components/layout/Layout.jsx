import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main
      className="min-h-screen max-w-[1400px] mx-auto"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
