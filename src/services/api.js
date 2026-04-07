import axios from 'axios';

/*
    Localhost: https://localhost:7235
    Production: https://vlagifyapi.runasp.net
*/

const API_BASE_URL = 'https://localhost:7235';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchProfile() {
    try {
        const response = await apiClient.get('/api/auth/profile');
        return response.data;
    } catch (error) {
        throw new Error(`Profile fetch failed: ${error.response?.statusText || error.message}`);
    }
}

export async function updateProfile(profileData) {
    try {
        const response = await apiClient.put('/api/auth/profile', profileData);
        return response.data;
    } catch (error) {
        throw new Error(`Profile update failed: ${error.response?.statusText || error.message}`);
    }
}

export async function changePassword(passwordData) {
    try {
        await apiClient.post('/api/auth/change-password', passwordData);
    } catch (error) {
        throw new Error(`Password change failed: ${error.response?.statusText || error.message}`);
    }
}

export async function sendContactMessage(contactData) {
    try {
        await apiClient.post('/api/contact', contactData);
    } catch (error) {
        throw new Error(`Contact message failed: ${error.response?.statusText || error.message}`);
    }
}