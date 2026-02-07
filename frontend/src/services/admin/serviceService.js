import axios from "axios";

const API_URL = "http://localhost:5000/api/service";

export const getServices = async () => {
  const response = await axios.get(`${API_URL}/get`);
  return response.data;
};

export const createService = async (formData) => {
  const response = await axios.post(`${API_URL}/add`, formData,    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};


export const getServiceById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateService = async (id, payload) => {
  const response = await axios.put(`${API_URL}/${id}`, payload);
  return response.data;
};

export const deleteService = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
