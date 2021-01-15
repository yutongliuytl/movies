import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Progress = ({ value, done }) => {
  const valueDisplay = (value / 5) * 100;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        style={{ color: done ? '#84EEAB' : '#88CADC', width: 100, height: 100 }}
        variant="determinate"
        value={valueDisplay}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="body1"
          component="div"
          color="textSecondary"
        >{`${value} / 5`}</Typography>
      </Box>
    </Box>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Progress;
