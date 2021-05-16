// import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://www.omdbapi.com/'
// })


import axios from 'axios';

let tokenSource;
export const fetchData = async keyword => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel('Operation canceled due to new request.');
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=b4c6f7a2&s=${keyword}`, {
      cancelToken: tokenSource.token
    });

    return { result: data };
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};