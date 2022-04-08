import axios from 'axios';

const usersApi = {
  baseUrl: 'http://127.0.0.1:8081/api',
  getUserById(id) {
    const data = axios.get(`${this.baseUrl}/users/${id}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
    return data;
  },
};

export default usersApi;
