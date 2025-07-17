// Importing axios for making HTTP requests
import axios from 'axios'; 

// Creating an axios instance with a base URL and default headers
// json-server --watch db.json
export const api = axios.create({
    baseURL: 'http://localhost:3000', // Base URL for the API
    headers: { // Default headers for the API requests
        'Content-Type': 'application/json', // Setting content type to JSON
        'Accept': 'application/json', // Accepting JSON responses
    },
});