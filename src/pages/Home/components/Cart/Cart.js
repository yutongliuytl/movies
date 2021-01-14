import React from 'react';
import { useGlobalContext } from 'global/context';
import Paper from '@material-ui/core/Paper';
import Progress from '../Progress/Progress';
import './Cart.scss';

const Cart = () => {
  const globalContext = useGlobalContext();
  const [movieState] = globalContext.movie;
  const { nominees } = movieState;

  const indexes = [0, 1, 2, 3, 4];

  console.log('gucci');
  return (
    <div className="cart-wrapper">
      <div className="progress-wrapper">
        <Progress value={nominees.length} />
      </div>
      <div className="containers-wrapper">
        {indexes.map(() => (
          <Paper className="cart-empty-container" />
          // <div  />
        ))}
      </div>
    </div>
  );
};

export default Cart;
