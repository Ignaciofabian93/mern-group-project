import React, { useEffect, useRef } from "react";
import { MainLayout, LeftLayout, RightLayout } from "../Layouts";
import { useSocket, useRoom } from "../hooks";
import InputMessage from "../components/InputMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import { ButtonSalir } from "../components/Buttons/ButtonSalir";
import { Button } from "@nextui-org/react";
import { ButtonConfig } from "../components/Buttons/ButtonConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef();
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

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <LeftLayout>
          <div className="w-full h-1/4 flex items-center px-4">
            <UserConnected />
          </div>
          <div className="w-full h-3/4 flex flex-col items-center justify-between pb-6">
            <div className="w-full">
              <div className="flex items-center justify-around w-full px-4 mt-6 mb-4">
                <CustomSelect
                  rooms={rooms.rooms}
                  onChange={handleCurrentRoom}
                  value={currentRoom}
                />
              </div>
              {currentRoom !== "" && (
                <div className="flex w-full px-4 justify-between">
                  <Button onClick={handleSaveChat}>Guardar chat</Button>
                  <Button onClick={handleGetChat}>Historial</Button>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-center px-4">
              <ButtonConfig
                text={"Ajustes"}
                onClick={() => handleNavigate("/profile")}
              />
              <ButtonSalir text={"Salir"} onClick={handleLogOut} />
            </div>
          </div>
        </LeftLayout>

        {/* ----------------- area de mensajes ------------------- */}

        <RightLayout>
          <div className="w-full h-full flex flex-col justify-between py-6 ">
            <div
              ref={containerRef}
              className="h-[calc(100%_-_100px)] px-10 overflow-y-auto scroll-window"
            >
              {messages.map((msg, index) => {
                if (msg.text) {
                  return (
                    <div
                      key={index}
                      className="flex border-2 w-fit px-6 py-2 rounded-lg mb-4"
                    >
                      <div>
                        <p className="transition-all duration-300 ease-in-out text-gray-500 dark:text-gray-400 text-sm">
                          {msg.username}
                        </p>
                        <p className="ml-4 transition-all duration-300 ease-in-out text-black dark:font-light dark:text-white">
                          {msg.text}
                        </p>
                      </div>
                      {msg.image && (
                        <div className="my-4 mx-24 flex justify-end">
                          <img
                            src={msg.image}
                            alt="imagen"
                            width={"30%"}
                            height={"auto"}
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
