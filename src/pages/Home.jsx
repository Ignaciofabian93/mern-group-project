import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import InputMessage from "../components/InpuntMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import CustomModal from "../components/Modal/CustomModal";
import { clsx } from "clsx";
import { ButtonConfig } from "../components/Buttons/ButtonConfig";
import { ButtonSalir } from "../components/Buttons/ButtonSalir";

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
        <aside className="w-[480px] h-full shadow-lg bg-[#5C6069]  dark:bg-[#0B1120]">
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
            <div className="w-full px-4  flex flex-col items-center">
              <ButtonConfig text={"Configuracion"} onClick={handleShowModal} />
              <ButtonSalir text={"Salir"} onClick={handleLogOut} />
            </div>
          </div>
        </aside>

        {/* ----------------- area de mensajes ------------------- */}

        <div
          className={clsx(
            /*-------- default config  ------*/
            "bg-white",
            "w-full h-full",
            "pb-4 pr-4",
            /*-------- dark mode config  ------*/
            "dark:bg-[#182234]",
          )}
        >
          <div className="w-full h-full flex flex-col justify-between py-6 ">
            <div
              className="h-[calc(100%_-_100px)] px-10 overflow-y-auto scroll-window"
              ref={windowRef}
            >
              {messages.map((msg, index) => (
                <div key={index}>
                  <p className="transition-all duration-300 ease-in-out text-gray-500 dark:text-gray-400 text-sm">
                    {msg.username}
                  </p>
                  <p className="ml-4 transition-all duration-300 ease-in-out text-black dark:font-light dark:text-white">
                    {msg.text}
                  </p>
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
