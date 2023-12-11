import React from "react";


const MainLayout = ({ children }) => {
  return (
    <main className="h-screen">
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
