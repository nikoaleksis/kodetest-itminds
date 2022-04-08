import axios from 'axios';

const notesApi = {
  baseUrl: 'http://127.0.0.1:8081/api',
  getNotes(offset) {
    const data = axios.get(`${this.baseUrl}/review-notes?offset=${offset}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
    return data;
  },
};

export default notesApi;
