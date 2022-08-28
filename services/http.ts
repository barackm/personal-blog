import axios from 'axios';

const APIkey = process.env.NEXT_PUBLIC_BLOG_API_KEY;
axios.defaults.params = { key: APIkey };

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  request: axios.request,
  headers: axios.defaults.headers,
  patch: axios.patch,
};

export default http;
