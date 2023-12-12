import { api } from "./config";

export const saveUser = async (user) => {
  try {
    const { name, email, password } = user;
    const response = await api.post("/api/register", { name, email, password });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al intentar crear el usuario, ${error}`);
  }
};
