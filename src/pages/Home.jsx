import React, { useState } from "react";
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
        <aside className="w-1/4 h-full bg-[#D5DBFD] shadow-lg dark:bg-[#182234]">
          <div className="w-full h-[100px] flex pt-[48px] justify-center items-center">
            <UserConnected />
          </div>
          <div className="w-full h-[calc(100%_-_100px)] flex flex-col items-center justify-between py-16">
            <div className="flex items-center justify-around w-full px-4 mt-6">
              <CustomSelect
                rooms={rooms}
                onChange={handleCurrentRoom}
                value={currentRoom}
              />
            </div>
            <div className="w-full px-4 mb-4">
              <button
                className="w-full h-[50px] flex items-center pl-4 my-2 rounded-md dark:bg-[#1E1F22] text-white"
                onClick={handleShowModal}
              >
                <p>Configuración</p>
              </button>
              <button
                className="w-full h-[50px] flex items-center pl-4 my-2 rounded-md dark:bg-[#1E1F22] text-white"
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
            "bg-gradient-to-b",
            "from-[#F8FAFC]",
            "to-[#DFF1FB]",
            "via-[#EEDDEC]",

            /*-------- dark mode  ------*/
            
            "dark:bg-gradient-to-b",
            "dark:from-[#0B1120]",
            "dark:to-[#361D3A]",
            "dark:via-[#0B263B]",
            "transition duration-500"
          )}
        >
          <div className="w-full h-full flex flex-col justify-between py-6">
            <div
              className="h-[calc(100%_-_100px)]"
              // style={{
              //   border: "1px solid white",
              //   padding: "10px",
              //   margin: "10px",
              //   overflowY: "auto",
              // }}
            >
              {messages.map((msg, index) => (
                <div key={index}>
                  <strong>{msg.username}:</strong> {msg.text}
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
