import axios from 'axios';

const instance = axios.create({
    baseURL :'https://us-central1-immediatejoiner.cloudfunctions.net/app/'
});

export default instance;