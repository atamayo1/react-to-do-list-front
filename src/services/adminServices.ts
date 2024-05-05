import axios from 'axios';
import { apiAdmin } from '../api/apiAdmin';

export const login = async (credentials: any) => {
  try {
    const response = await axios.post(`${apiAdmin}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error fetching login:', error);
    throw error;
  }
};
