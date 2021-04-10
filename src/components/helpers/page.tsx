import React, { FunctionComponent } from 'react'
import { Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from './copyright'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(13),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(18)
        }
    },
    paper: {
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`
        }
    }
}))
const Page: FunctionComponent<{ maxWidth: "sm" | "md" }> = ({ maxWidth, children }) => {

    const classes = useStyles()

    return (
        <>
            <Container maxWidth={maxWidth} className={classes.root}>
                <Paper className={classes.paper}>
                    {children}
                </Paper>
            </Container>
            <Copyright />
        </>
    )
}

export default Page