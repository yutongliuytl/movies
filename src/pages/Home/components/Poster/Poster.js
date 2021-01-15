import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from 'global/context';
import './Poster.scss';

const Poster = ({ poster, title }) => {
  const globalContext = useGlobalContext();
  const [movieState, movieDispatch] = globalContext.movie;
  const { nominees } = movieState;

  const checkRepeat = (repeatTitle) => {
    const match = nominees.filter((nominee) => repeatTitle === nominee.title);
    return match.length;
  };

  const handleChoose = (event) => {
    if (nominees.length < 5 && !checkRepeat(event.target.alt)) {
      nominees.push({
        src: event.target.currentSrc,
        title: event.target.alt,
      });

      movieDispatch({
        type: 'SET_NOMINEES',
        payload: {
          nominees,
        },
      });
    }
  };

  return (
    <div
      className="search-poster-wrapper"
      onClick={handleChoose}
      onKeyDown={handleChoose}
      role="button"
      tabIndex={0}
    >
      <img className="search-poster-wrapper__image" src={poster} alt={title} />
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;
