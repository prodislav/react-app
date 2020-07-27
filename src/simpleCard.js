import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'


const useStyles = makeStyles({
    // root: {
    //     width: 275,
    // },
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
    media: {
        paddingTop: '80%', // 16:9
        backgroundPosition: 'top',
    },
});

export function SimpleCard({name , secondName, pictureSrc, skills, city}) {
    const classes = useStyles();

        return (
            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={`${window.location.origin}/${pictureSrc}`}
                title="Paella dish"
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Student {name} {secondName}
                </Typography>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {city}
                </Typography>
                <Typography variant="body2" component="p">
                    <ul>{skills.map((el, i) => (<li key={i}>{el}</li>) )}</ul>
                </Typography>
            </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
            </Card>
        )

}
