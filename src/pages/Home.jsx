import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import InputMessage from "../components/InpuntMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import CustomModal from "../components/Modal/CustomModal";
import { clsx } from "clsx";

const rooms = [
  " ",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "MongoDB",
];

const Home = () => {
  const windowRef = useRef();
  const { handleLogOut } = useLogin();
  const [showModal, setShowModal] = useState(false);
  const {
    handleCurrentRoom,
    messages,
    sendMessage,
    handleMessageInput,
    messageInput,
    currentRoom,
    handleFile,
  } = useMessage();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleWindow = () => {
    const window = windowRef.current.clientHeight;
    console.log("window: ", window);
  };

  useEffect(() => {
    handleWindow();
  }, [messages]);

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <aside className="w-1/4 h-full bg-[#D5DBFD] shadow-lg bg-inherit">
          <div className="w-full h-[160px] flex justify-center items-center">
            <UserConnected />
          </div>
          <div className="w-full h-[calc(100%_-_160px)] pt-[48px] flex flex-col items-center justify-between py-16">
            <div className="flex items-center justify-around w-full px-4 mt-6">
              <CustomSelect
                rooms={rooms}
                onChange={handleCurrentRoom}
                value={currentRoom}
              />
            </div>
            <div className="w-full px-4 mb-4">
              <button
                className={clsx(
                  "w-full h-[50px]",
                  "flex items-center",
                  "pl-4 my-2",
                  "rounded-md",
                  /* ----default theme -----*/
                  "bg-gray-50",
                  "border border-gray-300",
                  "text-gray-900 text-sm",
                  "block w-full p-2.5",
                  "rounded-lg",
                  "shadow-md",
                  "transition duration-300",
                  /* ----focus theme -----*/
                  "focus:ring-blue-500",
                  "focus:border-blue-500",
                  /* ----dark theme -----*/
                  "dark:bg-gray-700",
                  "dark:border-gray-600",
                  "dark:placeholder-gray-400",
                  "dark:text-white",
                  "dark:focus:ring-blue-500",
                  "dark:focus:border-blue-500"
                )}
                onClick={handleShowModal}
              >
                <p>Configuración</p>
              </button>
              <button
                className={clsx(
                  "w-full h-[50px]",
                  "flex items-center",
                  "pl-4 my-2",
                  "rounded-md",
                  /* ----default theme -----*/
                  "bg-gray-50",
                  "border border-gray-300",
                  "text-gray-900 text-sm",
                  "block w-full p-2.5",
                  "rounded-lg",
                  "shadow-md",
                  "transition duration-300",
                  /* ----focus theme -----*/
                  "focus:ring-blue-500",
                  "focus:border-blue-500",
                  /* ----dark theme -----*/
                  "dark:bg-gray-700",
                  "dark:border-gray-600",
                  "dark:placeholder-gray-400",
                  "dark:text-white",
                  "dark:focus:ring-blue-500",
                  "dark:focus:border-blue-500"
                )}
                onClick={handleLogOut}
              >
                <p>Salir</p>
              </button>
            </div>
          </div>
        </aside>

        {/* ----------------- area de mensajes ------------------- */}

        <div
          className={clsx(
            /*-------- default config  ------*/
            "w-3/4 h-full",
            "pb-4 pr-4",
            "bg-gradient-to-b",
            "from-[#F8FAFC]",
            "to-[#DFF1FB]",
            "via-[#EEDDEC]",

            /*-------- dark mode  ------*/

            "dark:bg-gradient-to-b",
            "dark:from-[#0B1120]",
            "dark:to-[#361D3A]",
            "dark:via-[#0B263B]",
            "transition duration-300"
          )}
        >
          <div className="w-full h-full flex flex-col justify-between py-6 border-2 border-slate-400 rounded-lg dark:border-slate-600">
            <div
              className="h-[calc(100%_-_100px)] px-10 overflow-y-auto scroll-window"
              ref={windowRef}
            >
              {messages.map((msg, index) => (
                <div key={index}>
                  <strong className="transition-all duration-300 ease-in-out text-black dark:text-white">
                    {msg.username}:
                  </strong>
                  <span className="ml-4 transition-all duration-300 ease-in-out text-black dark:text-white">
                    {msg.text}
                  </span>
                  {msg.image && (
                    <div className="my-4 mx-24">
                      <img
                        src={msg.image}
                        alt="imagen"
                        width={"100%"}
                        height={200}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-[100px] flex justify-center items-center">
              <InputMessage
                onChange={handleMessageInput}
                onClick={sendMessage}
                onChangeFile={handleFile}
                value={messageInput}
              />
            </div>
          </div>
        </div>
        {/* ----------------- area de mensajes ------------------- */}
      </section>
      {showModal && (
        <CustomModal
          isOpen={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
    </MainLayout>
  );
};

export default Home;
