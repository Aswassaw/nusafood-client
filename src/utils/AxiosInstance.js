import axios from "axios";
import { API_SERVER_URL, TIMEOUT } from "../config/Config";

// axios global settings
axios.default.headers.common["Content-Type"] = "application/json";
axios.default.headers.common["Accept"] = "application/json";

export const AxiosInstance = axios.create({
  baseUrl: API_SERVER_URL,
  timeout: TIMEOUT,
});
