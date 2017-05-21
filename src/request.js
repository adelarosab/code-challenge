import axios from 'axios';

export default function query(query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/graphql', { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

export function mutation(mutation) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/graphql', { mutation })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}
