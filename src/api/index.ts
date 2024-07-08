import axios from "axios"

import { LI_BASE_API_URL } from "@/constants"

const apiClient = axios.create({
  baseURL: LI_BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
