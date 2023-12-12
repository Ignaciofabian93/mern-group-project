import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import React, { useState } from "react";

//Componentes David
import { UserConnected } from "../components/User/UserConnected";
import { Rooms } from "../components/Rooms/Rooms";
import Navbar from "../components/Navigation/Navbar";
import { Message } from "../components/Message/Message";
import { StatusBar } from "../components/StatusBar/StatusBar";
import DropDown from "../components/DropDown/DropDown";
import Modal from "../components/Modal/Modal";

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const [darkMode, setDarkMode] = useState(true);
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { user, joinRoom, messageInput, handleMessageInput } = useMessage();
  return (
    <MainLayout darkMode={darkMode}>
      <Navbar toogleDarkMode={toogleDarkMode} darkMode={darkMode} />
      <main className="flex">
        <section className="flex flex-col w-80 dark:bg-[#2B2D31] transition duration-500">
          <div className="m-5 mt-10 flex gap-12">
            <UserConnected
            imgUser={user.photo}
            username={user.name}
            email={user.email}
            />
            <DropDown></DropDown>
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

        <section className=" bg-slate-200 flex-1  px-12 pb-5 pt-2 dark:bg-[#313338] transition duration-500">
          <StatusBar text={"JavaScript Channel"} />
          <Message
            messageInput={messageInput}
            handleMessageInput={handleMessageInput}
          />
        </section>
      </main>
    </MainLayout>
  );
};

export default Home;
