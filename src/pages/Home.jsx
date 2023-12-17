import React from "react";
import { MainLayout, LeftLayout, RightLayout } from "../Layouts";
import { useSocket, useRoom } from "../hooks";
import InputMessage from "../components/InputMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import { ButtonSalir } from "../components/Buttons/ButtonSalir";
import { Button } from "@nextui-org/react";

const Home = () => {
  const { handleLogOut } = useLogin();
  const { rooms } = useRoom();
  const {
    handleCurrentRoom,
    messages,
    sendMessage,
    handleMessageInput,
    messageInput,
    currentRoom,
    handleFile,
    handleSaveChat,
    handleGetChat,
  } = useSocket();

  console.log("ROOMS: ", rooms);

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
            {currentRoom !== "" && (
              <>
                <Button onClick={handleSaveChat}>Guardar chat</Button>
                <Button onClick={handleGetChat}>Historial</Button>
              </>
            )}
            <div className="w-full px-4  flex flex-col items-center">
              <ButtonSalir text={"Salir"} onClick={handleLogOut} />
            </div>
          </div>
        </LeftLayout>

        {/* ----------------- area de mensajes ------------------- */}

        <RightLayout>
          <div className="w-full h-full flex flex-col justify-between py-6 ">
            <div className="h-[calc(100%_-_100px)] px-10 overflow-y-auto scroll-window">
              {messages.map((msg, index) => {
                console.log("MSG: ", msg);
                if (msg.text) {
                  return (
                    <div
                      key={index}
                      className="border-2 w-fit px-6 py-2 rounded-lg mb-4"
                    >
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
                  );
                }
              })}
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
    </MainLayout>
  );
};

export default Home;
