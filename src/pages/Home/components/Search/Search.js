import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from 'global/context';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import getMovieSearch from 'utils/movieQueries';
import './Search.scss';

const Search = () => {
  // const globalContext = useGlobalContext();
  // const [movieState] = globalContext.movie;
  // const { nominees } = movieState;
  const [query, setQuery] = useState();
  const [queryResults, setQueryResults] = useState();

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
      <div className="search-results-wrapper">{queryResults}</div>
    </div>
  );
};

export default Search;
