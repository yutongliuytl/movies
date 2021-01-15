import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const MovieContext = createContext();

const initialState = {
  nominees: [],
};

const localState = JSON.parse(localStorage.getItem('nominees'));

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOMINEES':
      return { ...state, nominees: action.payload.nominees };
    default:
      return null;
  }
};

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('nominees', JSON.stringify(state));
  }, [state]);

  return (
    <MovieContext.Provider value={[state, dispatch]}>
      {children}
    </MovieContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMovieContext = () => useContext(MovieContext);
