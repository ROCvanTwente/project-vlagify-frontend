import axios from 'axios';

const API_BASE_URL = 'https://localhost:7235'; // Adjust this to your API base URL

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

export const authService = {
  // Registration
  register: async (data) => {
    await apiClient.post('/api/auth/register', {
      firstName: data.firstName,
      infix: data.middleName || null, // infix is the middleName
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      phoneNumber: data.phone || null,
      address: data.address,
      postalCode: data.postalCode,
      city: data.city,
      country: data.country
    });
    
    // After successful registration, automatically login
    return await authService.login(data.email, data.password);
  },

  // Login
  login: async (email, password) => {
    const response = await apiClient.post('/api/auth/login', {
      email,
      password
    });
    
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    
    return {
      success: true,
      user: {
        email: response.data.email,
        firstName: response.data.firstName,
        token: response.data.token
      },
      token: response.data.token
    };
  },

  // Logout
  logout: async () => {
    try {
      await apiClient.post('/api/auth/logout');
      localStorage.removeItem('authToken');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error.response?.data?.message || error.message);
      // Even if logout fails on server, clear local storage
      localStorage.removeItem('authToken');
      return { success: true };
    }
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem('authToken');
  },

  // Clear token
  clearToken: () => {
    localStorage.removeItem('authToken');
  }
};
