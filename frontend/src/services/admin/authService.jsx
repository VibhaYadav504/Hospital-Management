import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";


export const register = async (data) => {
  const response = await axios.post(`${API_URL}/register`, data, {
    headers: { "Content-Type": "application/json" }
  });
  return response.data;
};


export const login = async (data) => {
  const response = await axios.post(
    `${API_URL}/login`,
    data,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};