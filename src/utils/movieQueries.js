import axios from 'axios';

const getMovieSearch = async (searchId) => {
  const url = new URL(process.env.REACT_APP_API_URL);
  url.search = new URLSearchParams({
    apikey: process.env.REACT_APP_API_KEY,
    s: `*${searchId}*`,
  });

  if (searchId) {
    return axios
      .get(url.toString())
      .then((result) => result.data.Search)
      .catch((error) => console.log('error', error));
  }

  return [];
};

export default getMovieSearch;
