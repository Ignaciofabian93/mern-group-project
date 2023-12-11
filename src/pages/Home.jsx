// import Textfield from "../components/Textfield/Textfield";
import MainLayout from "../Layouts/MainLayout";

import useMessage from "../hooks/useMessage";
import React, { useState } from "react";

// import { ThemeContext } from "../context/themeContext";
// import { Button } from "../components/Buttons/Button";
// import { ButtonGoogle } from "../components/Buttons/ButtonGoogle";

//Componentes David
import { UserConnected } from "../components/User/UserConnected";
import { Rooms } from "../components/Rooms/Rooms";
import Navbar from "../components/Navigation/Navbar";
import { Message } from "../components/Message/Message";
import { StatusBar } from "../components/StatusBar/StatusBar";

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const [darkMode, setDarkMode] = useState(false)
  const toogleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const {
    username,
    handleUsername,
    currentRoom,
    handleCurrenRoom,
    joinRoom,
    imgUser,
    imgRoom,
    messageInput,
    messages,
    handleMessageInput,
    sendMessage,
  } = useMessage();
  return (
    <MainLayout>
      <Navbar  toogleDarkMode={toogleDarkMode} darkMode={darkMode} />
      <main className={`flex ${darkMode && "dark"}`}>
        <section className="flex flex-col w-64 dark:bg-[#2B2D31]">
          <div className="m-5 mt-10">
            <UserConnected
              imgUser={"/src/assets/img/user.jpg"}
              username={"midudev"}
              email={"midudev@gmail.com"}
            />
          </div>

          <div className="pt-5 m-5 flex flex-col gap-4 h-ful">
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
          </div>
        </section>

        <section className="flex-1  px-4 pb-5 pt-10 dark:bg-[#313338]">
          <StatusBar text={"JavaScript Channel"} />
          <Message />
        </section>
      </main>
    </MainLayout>
  );
};

export default Home;
