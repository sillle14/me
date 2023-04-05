import React, { FunctionComponent } from 'react'
import { Container, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Copyright from './copyright'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(13),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(18)
        }
    },
    paper: {
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        [theme.breakpoints.up('sm')]: {
            padding: `${theme.spacing(4)} ${theme.spacing(6)}`
        }
    }
}))
const Page: FunctionComponent<{ maxWidth: "sm" | "md" | "lg" }> = ({ maxWidth, children }) => {

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