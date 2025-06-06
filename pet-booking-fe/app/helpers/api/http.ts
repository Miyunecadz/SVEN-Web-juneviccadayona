import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Use NEXT_PUBLIC_ for Next.js env exposure
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;