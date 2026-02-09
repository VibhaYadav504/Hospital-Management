import axios from "axios";

const API_URL = "http://localhost:5000/api/doctor";

export const getDoctors = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
};

export const createDoctor = async (payload) => {
   Object.keys(payload).forEach(key => {
    console.log(`${key}:`, payload[key]);
  });
  const response = await axios.post(`${API_URL}/`, payload);
  return response.data;
};


export const getDoctorById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateDoctor = async (id, payload) => {
  const response = await axios.put(`${API_URL}/${id}`, payload);
  return response.data;
};

export const deleteDoctor = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
