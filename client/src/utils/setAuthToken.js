import axios from 'axios';

const setAuthToken = token => {

    // Checks if the user token is stored/valid in the localStorage
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers['x-auth-token'];
    }
};

export default setAuthToken;