import axios from "axios";

const API_URL = "http://localhost:5000/autos";

export const getAutos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createAuto = async (auto) => {
  await axios.post(API_URL, auto);
};

export const updateAuto = async (id, auto) => {
  await axios.put(`${API_URL}/${id}`, auto);
};

export const deleteAuto = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
