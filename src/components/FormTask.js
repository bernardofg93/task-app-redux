import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { taskSave } from '../actions/task';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export const FormTask = () => {
    const classes = useStyles();

    const [formValues, setFormValues] = useState({
        task: '',
        desc: ''
    });

    const readValuesForm = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const dispatch = useDispatch();

    const insertValues = (e) => {
        e.preventDefault();
        dispatch(taskSave(formValues));
    }

    return (
        <form
            className={classes.root}
            noValidate autoComplete="off"
            onChange={readValuesForm}
            onSubmit={insertValues}
        >
            <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                name="task"
            />
            <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                name="desc"
            />
            <Button type="submit" variant="contained" color="primary">
                Primary
            </Button>
        </form>
    );
}