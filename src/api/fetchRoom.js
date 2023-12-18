import { api } from "./config";

export const getRooms = async () => {
  try {
    const response = await api.get("/api/rooms");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al obtener los espacios: ${error}`);
  }
};

export const getRoom = async (id) => {
  try {
    const response = await api.get(`/api/rooms/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al obtener el espacio: ${error}`);
  }
};

export const createRoom = async (name, creator) => {
  try {
    const response = await api.post("/api/rooms", { name, creator });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al crear el espacio: ${error}`);
  }
};

export const saveUserInRoom = async (room_id, uid) => {
  try {
    const response = await api.put(`/api/rooms/${room_id}`, { uid });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al guardar el usuario en el espacio: ${error}`);
  }
};

export const saveChat = async (room_id, messages) => {
  try {
    const response = await api.put(`/api/rooms/${room_id}`, { messages });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(`Error al guardar el mensaje en el espacio: ${error}`);
  }
};
