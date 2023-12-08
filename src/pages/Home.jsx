import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Textfield from "../components/Textfield/Textfield";
import Button from "../components/Buttons/Button";
import useMessage from "../hooks/useMessage";

const Home = () => {
  const { newMessage, handleMessage, sendMessage } = useMessage();
  return (
    <MainLayout>
      <h1>Home</h1>
      <Textfield value={newMessage} onChange={handleMessage} />
      <Button text="Button" onClick={sendMessage} />
    </MainLayout>
  );
};

export default Home;
