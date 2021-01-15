import React from 'react';
import { useGlobalContext } from 'global/context';
import Paper from '@material-ui/core/Paper';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Progress from '../Progress/Progress';
import './Cart.scss';

const Cart = () => {
  const globalContext = useGlobalContext();
  const [movieState, movieDispatch] = globalContext.movie;
  const { nominees } = movieState;

  const removePoster = (event) => {
    const newNoms = nominees.filter(
      (nominee) => event.target.alt !== nominee.title,
    );
    movieDispatch({
      type: 'SET_NOMINEES',
      payload: {
        nominees: newNoms,
      },
    });
  };
  const indexes = [0, 1, 2, 3, 4];
  return (
    <div>
      <h2 className="nomination-text">Your nominations</h2>
      <div className="cart-wrapper">
        <div className="progress-wrapper">
          {nominees && (
            <Progress value={nominees.length} done={nominees.length === 5} />
          )}
        </div>
        <div className="containers-wrapper">
          {indexes.map((ind) =>
            ind < nominees.length ? (
              <img
                className="cart-poster-container"
                src={nominees[ind].src}
                alt={nominees[ind].title}
                key={ind}
                onClick={removePoster}
                onKeyDown={removePoster}
                role="presentation"
                tabIndex={-1}
              />
            ) : (
              <Paper className="cart-poster-container" key={ind} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
