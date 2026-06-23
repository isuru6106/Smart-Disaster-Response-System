import axios from "axios";

const API_URL = "http://localhost:8086/api/requests";

export const getRequests = () => {
  return axios.get(API_URL);
};