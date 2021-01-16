import React, { useEffect, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

import getMovieSearch from 'utils/movieQueries';
import Poster from '../Poster/Poster';
import './Search.scss';

const Search = () => {
  const [query, setQuery] = useState();
  const [queryResults, setQueryResults] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      const results = await getMovieSearch(query);
      setQueryResults(results);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2 className="search-text">Movies</h2>
      <div className="search-wrapper">
        <Paper className="search-paper">
          <InputBase
            fullWidth
            className="search-input"
            placeholder="Search for movies..."
            inputProps={{ 'aria-label': 'search for movies' }}
            onChange={handleChange}
          />
          <SearchIcon className="search-icon" />
        </Paper>
        <div className="grid-wrapper">
          <div className="search-results-wrapper">
            {queryResults &&
              queryResults.map((movie) => (
                <Poster
                  poster={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  key={movie.Title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
