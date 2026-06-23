import axios from "axios";

export const getUsers = () =>
  axios.get("http://localhost:8081/api/users");

export const getIncidents = () =>
  axios.get("http://localhost:8082/api/incidents");

export const getResources = () =>
  axios.get("http://localhost:8083/api/resources");

export const getShelters = () =>
  axios.get("http://localhost:8084/api/shelters");

export const getRequests = () =>
  axios.get("http://localhost:8086/api/requests");