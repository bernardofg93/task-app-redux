import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

//dispatch para disparar acciones al estado
export const FloatButton = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(uiOpenModal());
  }

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenModal}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
