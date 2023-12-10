import React from "react";


const MainLayout = ({ children }) => {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
