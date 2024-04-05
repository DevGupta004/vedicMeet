import axios from 'axios';

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer yourAccessToken'
    },
    params: {
        // Optional query parameters
        // param1: 'value1',
    }
}

// Function for making GET requests
async function get(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function for making GET requests
async function post(url, data) {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default {
    get,
    post,
} ;