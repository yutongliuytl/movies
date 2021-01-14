import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const MovieContext = createContext();

const initialState = {
  test: 0,
};

const localState = JSON.parse(localStorage.getItem('cart-items'));

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEST':
      return { ...state, test: action.payload.test };
    default:
      return null;
  }
};

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(state));
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
