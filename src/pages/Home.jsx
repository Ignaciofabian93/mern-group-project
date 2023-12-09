import React, { useContext } from "react";
import MainLayout from "../Layouts/MainLayout";
import Textfield from "../components/Textfield/Textfield";
import useMessage from "../hooks/useMessage";
import { ThemeContext } from "../context/themeContext";
import { Button } from "../components/Buttons/Button";
import { ButtonGoogle } from "../components/Buttons/ButtonGoogle";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { newMessage, handleMessage, sendMessage } = useMessage();
  return (
    <MainLayout>
      <div>jashasjhsajsahsa</div>
      <Textfield value={newMessage} onChange={handleMessage} />
      <Button text="Button" onClick={sendMessage} />
      <ButtonGoogle text="Continue Whit Google" onclick={handleMessage} />
    </MainLayout>
  );
};

export default Home;
