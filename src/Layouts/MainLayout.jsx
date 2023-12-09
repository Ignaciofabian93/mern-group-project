import React from "react";
import Navbar from "../components/Navigation/Navbar";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
