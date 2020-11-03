import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-b8750.firebaseio.com/'
});

export default instance;