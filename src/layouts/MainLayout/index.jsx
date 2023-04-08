import React from "react";
import { Footer, Navbar } from "../../components";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
