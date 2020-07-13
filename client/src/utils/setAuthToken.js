import axios from 'axios';

const setAuthToken = token => {

    // Checks if there is token in localStorage
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers['x-auth-token'];
    }
};

export default setAuthToken;