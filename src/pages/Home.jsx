import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import useMessage from "../hooks/useMessage";
import InputMessage from "../components/InpuntMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import CustomModal from "../components/Modal/CustomModal";
import { clsx } from "clsx";
import useUser from "../hooks/useLogin";

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
  const { user } = useUser();
  const { handleLogOut } = useLogin();
  const [showModal, setShowModal] = useState(false);
  const {
    handleCurrentRoom,
    messages,
    sendMessage,
    handleMessageInput,
    messageInput,
    currentRoom,
  } = useMessage();

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <aside className="w-1/4 h-full  shadow-lg black: bg-[#0B1120]">
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
            "dark:bg-[#182234]"
          )}
        >
          <div className="w-full h-full flex flex-col justify-between  py-8">
            <div className="h-[calc(100%_-_100px)] px-10 flex flex-col  overflow-y-scroll">
              {messages.map((msg, index) => (
                <div className=" flex  gap-4 pt-5 items-center" key={index}>
                  <div className="flex gap-5 pt-5">
                    {/* <img
                      src={user.photo}
                      alt="profile"
                      className=" rounded-full w-12 h-12"
                    /> */}
                  </div>
                  <div className=" py-3 px- rounded-r-xl rounded-b-xl pt-8">
                    <p className=" font-light text-sm dark: text-[#94A3B8]">
                      {msg.username}
                    </p>
                    <div>
                      <p className=" font-thin text-base pl-5 pt-1 text-black dark:text-white">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[100px] flex justify-center items-center">
              <InputMessage
                onChange={handleMessageInput}
                onClick={sendMessage}
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
