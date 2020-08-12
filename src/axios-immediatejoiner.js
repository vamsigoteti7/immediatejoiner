import axios from 'axios';

const instance = axios.create({
    baseURL :'https://us-central1-immediatejoinerfire.cloudfunctions.net/app/'
});

export default instance;