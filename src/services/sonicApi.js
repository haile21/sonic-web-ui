// src/services/sonicApi.js

import axios from 'axios';

const BASE_URL = 'https://sonic-api.example.com';

export const getDevices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/devices`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch devices:', error);
    return [];
  }
};

export const configureVlan = async (vlanData) => {
  try {
    const response = await axios.post(`${BASE_URL}/vlans`, vlanData);
    return response.data;
  } catch (error) {
    console.error('Failed to configure VLAN:', error);
    throw error;
  }
};
