import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import React, { useState } from "react";

//Componentes
import { Rooms } from "../components/Rooms/Rooms";
import { Navbar } from "../components/Navigation/Navbar";
import { Message } from "../components/Message/Message";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { UserConnected } from "../components/User/UserConnected";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { user, joinRoom, messageInput, handleMessageInput } = useMessage();
  return (
    <MainLayout darkMode={darkMode}>
      <Navbar toogleDarkMode={toogleDarkMode} darkMode={darkMode} />
      <main className="w-full h-[calc(100vh_-_50px)] pt-[50px]">
        <section className="flex flex-col w-1/4 dark:bg-[#2B2D31] transition duration-500">
          <div className="flex w-full items-center justify-center px-4 py-2">
            <UserConnected
              imgUser={"/src/assets/img/user.jpg"}
              username={"David Martinez"}
              email={"dmmtapia.ux@gmail.com"}
              // imgUser={user.photo}
              // username={user.name}
              // email={user.email}
            />
            {/* <DropDown></DropDown> */}
          </div>

            <div className="pt-5 m-5 flex flex-col gap-4 h-ful">
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
              <Rooms joinRoom={joinRoom} imgRoom={"/src/assets/img/JS.png"} />
            </div>
          </div>
        </section>

        {/* <section className=" bg-slate-200 flex-1  px-12 pb-5 pt-2 dark:bg-[#313338] transition duration-500">
          <StatusBar text={"JavaScript Channel"} />
        <section className=" bg-slate-200 flex-1  pb-5  dark:bg-[#313338] transition duration-500">
          <StatusBar
            text={"JavaScript Channel"}
            toogleDarkMode={toogleDarkMode}
            darkMode={darkMode}
          />
          <Message
            messageInput={messageInput}
            handleMessageInput={handleMessageInput}
          />
        </section> */}
      </main>
    </MainLayout>
  );
};

export default Home;
