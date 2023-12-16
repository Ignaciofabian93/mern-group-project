import React, { useEffect, useRef, useState } from "react";
import { MainLayout, LeftLayout, RightLayout } from "../Layouts";
import { useMessage, useRoom } from "../hooks";
import InputMessage from "../components/InputMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import CustomModal from "../components/Modal/CustomModal";
import { ButtonSalir } from "../components/Buttons/ButtonSalir";

// const rooms = [
//   " ",
//   "JavaScript",
//   "TypeScript",
//   "ReactJs",
//   "NextJs",
//   "NodeJs",
//   "MongoDB",
// ];

const Home = () => {
  const windowRef = useRef();
  const { handleLogOut } = useLogin();
  const [showModal, setShowModal] = useState(false);
  const { rooms } = useRoom();
  const {
    handleCurrentRoom,
    messages,
    sendMessage,
    handleMessageInput,
    messageInput,
    currentRoom,
    handleFile,
  } = useMessage();

  console.log("ROOMS: ", rooms);

  const handleWindow = () => {
    // const window = windowRef.current.clientHeight;
  };

  useEffect(() => {
    handleWindow();
  }, [messages]);

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <LeftLayout>
          <div className="w-full h-1/4 flex items-center px-4">
            <UserConnected />
          </div>
          <div className="w-full h-[calc(100%_-_160px)] pt-[48px] flex flex-col items-center justify-between py-16">
            <div className="flex items-center justify-around w-full px-4 mt-6">
              <CustomSelect
                rooms={rooms.rooms}
                onChange={handleCurrentRoom}
                value={currentRoom}
              />
            </div>
            <div className="w-full px-4  flex flex-col items-center">
              <ButtonSalir text={"Salir"} onClick={handleLogOut} />
            </div>
          </div>
        </LeftLayout>

        {/* ----------------- area de mensajes ------------------- */}

        <RightLayout>
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
                    <div className="my-4 mx-24 flex justify-end">
                      <img
                        src={msg.image}
                        alt="imagen"
                        width={"25%"}
                        height={50}
                        className="rounded-xl"
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
        </RightLayout>
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
