import axios from "axios";

export const DataApiGateway = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/news`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
})