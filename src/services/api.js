import axios from 'axios';

/**
 * Base API configuration
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

/**
 * Request interceptor for API calls
 */
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for API calls
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle token refresh or other error scenarios
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Implement token refresh logic here if needed
        // const refreshToken = localStorage.getItem('refresh_token');
        // const response = await refreshAuthToken(refreshToken);
        // localStorage.setItem('auth_token', response.data.token);
        
        // return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., logout user)
        console.error('Token refresh failed:', refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

/**
 * Example API methods
 */
export const exampleApi = {
  /**
   * Get all items
   * @returns {Promise} - API response
   */
  getItems: () => api.get('/items'),
  
  /**
   * Get item by ID
   * @param {string|number} id - Item ID
   * @returns {Promise} - API response
   */
  getItemById: (id) => api.get(`/items/${id}`),
  
  /**
   * Create new item
   * @param {Object} data - Item data
   * @returns {Promise} - API response
   */
  createItem: (data) => api.post('/items', data),
  
  /**
   * Update item
   * @param {string|number} id - Item ID
   * @param {Object} data - Updated item data
   * @returns {Promise} - API response
   */
  updateItem: (id, data) => api.put(`/items/${id}`, data),
  
  /**
   * Delete item
   * @param {string|number} id - Item ID
   * @returns {Promise} - API response
   */
  deleteItem: (id) => api.delete(`/items/${id}`),
};

export default api;