import axios from 'axios';

const instance = axios.create({
    baseURL :'https://reacttest-f307f.firebaseio.com'
});

export default instance;