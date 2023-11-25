import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <div>Aqui va el navbar</div>
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
