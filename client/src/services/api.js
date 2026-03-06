import axios from 'axios';

// Create an instance of axios with default configuration
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // API base URL
    timeout: 1000, // Request timeout
    headers: {'X-Custom-Header': 'foobar'},
});

export default apiClient;