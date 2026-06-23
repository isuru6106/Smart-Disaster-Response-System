import axios from "axios";

const API_URL = "http://localhost:8083/api/resources";

export const getResources = () => {
  return axios.get(API_URL);
};