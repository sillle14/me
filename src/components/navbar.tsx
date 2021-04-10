import React from 'react'
import {
    AppBar,
    Box,
    Link,
    Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GitHub, LinkedIn, Email } from '@material-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import green from '@material-ui/core/colors/green'

import ContactLink from './helpers/contactLink'


const useStyles = makeStyles((theme) => ({
    root: {
        background: green[900]
    },
    bar: {
        justifyContent: 'space-between',
        overflow: 'auto',
        whiteSpace: 'nowrap'
    },
    navLinks: {
        fontSize: 'x-large',
        marginRight: theme.spacing(2)
    }
}))
const NavBar = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Box>
                    <Link to="/" component={RouterLink} color="inherit" className={classes.navLinks}>Home</Link>
                    <Link to="projects" component={RouterLink} color="inherit" className={classes.navLinks}>Projects</Link>
                </Box>
                <Box display="flex">
                    <ContactLink ariaLabel="GitHub" href="https://github.com/sillle14"><GitHub /></ContactLink>
                    <ContactLink ariaLabel="LinkedIn" href="https://www.linkedin.com/in/lewis-silletto/"><LinkedIn /></ContactLink>
                    <ContactLink ariaLabel="Email Me" href="mailto:lewis.silletto@gmail.com"><Email /></ContactLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar