import axios from "axios";

const API_URL = "http://localhost:8084/api/shelters";

export const getShelters = () => {
  return axios.get(API_URL);
};