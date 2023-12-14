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
            "w-full h-full",
            "pb-4 pr-4",
            "dark:bg-[#182234]"
          )}
        >
          <div className="w-full h-full flex flex-col justify-between  ">
            <div className="h-[calc(100%_-_100px)] px-10 flex flex-col  overflow-y-auto">
              {messages.map((msg, index) => (
                <div className=" flex  gap-4 jus items-center" key={index}>
                  <div className="flex gap-5 pt-5">
                    <img
                      src={user.photo}
                      alt="profile"
                      className=" rounded-full w-12 h-12"
                    />
                  </div>
                  <div className=" py-3 px- rounded-r-xl rounded-b-xl pt-8">
                    <p className=" font-light text-sm dark: text-[#94A3B8]">
                      {msg.username}
                    </p>
                    <div>
                      <p className=" font-light text-base pl-5 pt-1 text-black dark:text-white">
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
