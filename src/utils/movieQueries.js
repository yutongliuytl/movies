const getMovieSearch = async (searchId) => {
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    // mode: 'no-cors',
    redirect: 'follow',
  };
  const url = new URL(process.env.REACT_APP_API_URL);
  url.search = new URLSearchParams({
    apikey: process.env.REACT_APP_API_KEY,
    s: `*${searchId}*`,
  });
  console.log(url.toString());

  if (searchId) {
    return fetch(url.toString(), requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  }

  return null;
};

export default getMovieSearch;
