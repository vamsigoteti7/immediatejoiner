import axios from 'axios';

const instance = axios.create({
    baseURL :'https://asia-south1-immediatejoiner.cloudfunctions.net/app'
});

export default instance;