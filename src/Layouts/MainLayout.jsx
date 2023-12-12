import React from "react";


const MainLayout = ({ children, darkMode }) => {
  return (
    <main className={`${darkMode && "dark"}`}>
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
