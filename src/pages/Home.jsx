// import Textfield from "../components/Textfield/Textfield";
import MainLayout from "../Layouts/MainLayout";

import useMessage from "../hooks/useMessage";
import React from "react";

// import { ThemeContext } from "../context/themeContext";
// import { Button } from "../components/Buttons/Button";
// import { ButtonGoogle } from "../components/Buttons/ButtonGoogle";

//Componentes David
import { UserConnected } from "../components/User/UserConnected";
import { Rooms } from "../components/Rooms/Rooms";
import Navbar from "../components/Navigation/Navbar";

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    username,
    handleUsername,
    currentRoom,
    handleCurrenRoom,
    joinRoom,
    imgRoom,
    messageInput,
    messages,
    handleMessageInput,
    sendMessage,
  } = useMessage();
  return (
    <MainLayout>
      <Navbar />
      <main className="flex">
        <section className="flex flex-col flex-1 w-32">
          <div className="m-5 mt-10">
            <UserConnected username={"midudev"} email={"midudev@gmail.com"} />
          </div>

          <div className="pt-5 m-5 flex flex-col gap-4">
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
          </div>
        </section>

        <section className="flex-2  w-2/3  mr-32 h-screen">
          <div className="borde h-full w-full  bg-[#313338]"></div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Home;
