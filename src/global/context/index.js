import React from 'react';
import PropTypes from 'prop-types';

import {
  MovieContextProvider,
  useMovieContext,
} from './providers/MovieProvider';

export const GlobalContextProvider = ({ children }) => (
  <MovieContextProvider>{children}</MovieContextProvider>
);

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => ({
  movie: useMovieContext(),
});

export const useGlobalDispatch = () => ({});
