import React, { useEffect, useRef, useState } from "react";
import { MainLayout, LeftLayout, RightLayout } from "../Layouts";
import { useSocket, useRoom } from "../hooks";
import InputMessage from "../components/InputMessage/InputMessage";
import UserConnected from "../components/User/UserConnected";
import CustomSelect from "../components/Select/CustomSelect";
import useLogin from "../hooks/useLogin";
import { ButtonSalir } from "../components/Buttons/ButtonSalir";
import { Button } from "@nextui-org/react";
import { ButtonConfig } from "../components/Buttons/ButtonConfig";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const NameIcon = ({ letter }) => {
  return (
    <div className="w-[40px] h-[40px] rounded-[50%] bg-white/70 border-2 border-sky-500 dark:bg-cyan-800 dark:border-cyan-800 flex items-center justify-center">
      <p className="capitalize text-2xl font-semibold dark:text-white">
        {letter}
      </p>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const containerRef = useRef();
  const [selectedImage, setSelectedImage] = useState("");
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

  const handleSelectImage = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <MainLayout>
      <section className="w-full h-full flex">
        <LeftLayout>
          <div className="w-full h-1/5 flex items-center px-4">
            <UserConnected />
          </div>
          <div className="w-full h-4/5 flex flex-col items-center justify-between pb-6">
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
                  <Button
                    onClick={handleSaveChat}
                    className="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-white"
                  >
                    Guardar chat
                  </Button>
                  <Button
                    onClick={handleGetChat}
                    className="bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-white"
                  >
                    Historial
                  </Button>
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
                      className="flex border-2 border-sky-500 w-fit px-6 py-2 rounded-lg mb-4 dark:border-slate-500"
                    >
                      <div className="w-full flex">
                        <NameIcon letter={msg.username[0]} />
                        <div className="ml-4">
                          <p className="transition-all duration-300 ease-in-out text-gray-500 dark:text-gray-400 text-sm italic">
                            {msg.username}
                          </p>
                          <p className="transition-all duration-300 ease-in-out text-black dark:font-light dark:text-white">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                      {msg.image && (
                        <div
                          className="w-fit my-4 mx-12 flex justify-end cursor-pointer"
                          onClick={() => handleSelectImage(msg.image)}
                        >
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
            {/* Modal para ver la imagen más grande*/}
            <Modal isOpen={isOpen} size="xl">
              <ModalContent>
                {() => (
                  <>
                    <ModalHeader>Imagen</ModalHeader>
                    <ModalBody>
                      <img
                        key={selectedImage}
                        src={selectedImage}
                        alt="imagen"
                        className="w-[100%] h-[50%] max-h-[300px] rounded-xl"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={onClose}>Cerrar</Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
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
