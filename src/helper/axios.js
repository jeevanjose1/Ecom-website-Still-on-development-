import axios from "axios";
import { urls } from "./urlConfig";

export const instence = axios.create({
  baseURL: urls,
});
