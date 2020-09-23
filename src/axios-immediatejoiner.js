import axios from 'axios';

const instance = axios.create({
    baseURL: window.location.href === 'https://immediatejoiner.us' ? 'https://us-central1-immediatejoiner.cloudfunctions.net/app' : 'https://asia-south1-immediatejoiner.cloudfunctions.net/app'
});

export default instance;