import axios from 'axios';

function onSuccess(response) {
  return response.data;
}
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

export default {
  get(url) {
    return axios.get(url)
          .then(response => onSuccess(response))
          .catch(error => onError(error));
  },
  post(url, request) {
    return axios.post(url, request)
          .then(response => onSuccess(response))
          .catch(error => onError(error));
  },
  patch(url, request) {
    return axios.patch(url, request)
          .then(response => onSuccess(response))
          .catch(error => onError(error));
  },
  delete(url, request) {
    return axios.delete(url, request)
          .then(response => onSuccess(response))
          .catch(error => onError(error));
  },
};
