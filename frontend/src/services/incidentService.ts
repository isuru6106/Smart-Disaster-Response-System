import axios from "axios";

const API_URL = "http://localhost:8082/api/incidents";

export const getIncidents = async () => {
  return await axios.get(API_URL);
};