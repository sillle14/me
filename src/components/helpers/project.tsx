import { FunctionComponent } from 'react';
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    image: {
        width: '100%',
    }
}))

const Project: FunctionComponent<{ title: string, imgSrc: string, altText: string }> = ({ title, imgSrc, altText, children }) => {

    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h4" component="h2">{title}</Typography>
                {children}
            </Grid>
            <Grid item xs={12} sm={4}>
                <img className={classes.image} src={imgSrc} alt={altText} />
            </Grid>
        </Grid>
    )
}

export default Project