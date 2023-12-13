import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import React, { useState } from "react";

//Componentes
import { Rooms } from "../components/Rooms/Rooms";
import { Message } from "../components/Message/Message";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { UserConnected } from "../components/User/UserConnected";
import { InputMessage } from "../components/InpuntMessage/InputMessage";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const { joinRoom, messageInput, handleMessageInput } = useMessage();

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <aside className="flex flex-col w-1/4 h-full dark:bg-[#2B2D31] transition duration-500">
          <div className="flex w-full h-2/12 items-center justify-center px-4 py-2">
            <UserConnected />
          </div>
          <div className="flex flex-col w-full h-10/12 justify-center gap-4 px-4 py-2">
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
          </div>
        </aside>
        <div className="w-3/4 h-full bg-slate-200 flex-1 px-12 pb-5 pt-2 dark:bg-[#313338] transition duration-500">
          <div className="w-full h-1/12">
            <StatusBar
              text={"JavaScript Channel"}
              toogleDarkMode={toogleDarkMode}
              darkMode={darkMode}
            />
          </div>
          <div className="w-full h-10/12">
            <Message
              messageInput={messageInput}
              handleMessageInput={handleMessageInput}
            />
          </div>
          <div className="w-full h-1/12">
            <InputMessage
              messageInput={messageInput}
              handleMessageInput={handleMessageInput}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
