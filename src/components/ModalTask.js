import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../actions/ui';

//Components
import { FormTask } from './FormTask';



function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ddd',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const ModalTask = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    //Dispatch para ejecutar accion al reducer
    const dispatch = useDispatch();

    //Optener el estado
    const { modalOpen } = useSelector(state => state.ui);

    //Cerrar el modal
    const handleCloseModal = () => {
        dispatch(uiCloseModal());
    }
    
    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Tareas</h2>
                    <FormTask/>
                </div>

            </Modal>
        </div>
    );
}
