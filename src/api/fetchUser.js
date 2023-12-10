import { api } from "./config";

export const handleLoginUser = async (uid) => {
  try {
    const response = await api.post("/login", { uid });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al intentar conectar el inicio de sesión, ${error}`);
  }
};

export const handleLogoutUser = async () => {};

export const handleRegisterUser = async () => {};
