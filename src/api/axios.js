import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://dmonster1599.cafe24.com/jax/',
  headers: {
    // 'X-Custom-Header': 'foobar',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  //   timeout: 2000,
});

// instance.defaults.paramsSerializer = function (paramObj) {
//   const params = new URLSearchParams();
//   for (const key in paramObj) {
//     params.append(key, paramObj[key]);
//   }

//   return params.toString();
// };

export default instance;
