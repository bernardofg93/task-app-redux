import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import { getStateLocalStorage } from '../utils/localStorage';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const CardTask = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const  tasks  = useSelector(state => state.task.tasks);

    const [allTasks, setAllTasks] = useState({});
    const [reloadTask, setReloatTask] = useState(false);

    useEffect(() => {
        const storageAlltasks = getStateLocalStorage();
        setAllTasks(storageAlltasks);
        setReloatTask(true);
    }, [reloadTask])

    console.log(allTasks);

    
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    {tasks.map((data, index) => (
                        <Grid>
                            <Card className={classes.root} index={index}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        be{bull}nev{bull}o{bull}lent
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {data.task}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

