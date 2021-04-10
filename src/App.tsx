import React from 'react'
import { Routes, HashRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

import Home from './components/pages/home'
import NavBar from './components/navbar'
import Projects from './components/pages/projects'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        minHeight: '100%',
        width: '100%',
        boxSizing: 'border-box',
        background: green[100]
    }
}))

const App = () => {

    const classes = useStyles()

    return (
        <HashRouter><div className={classes.root}>
            <NavBar />
            <Routes>
                <Home path="/" />
                <Projects path="projects" />
            </Routes>
        </div></HashRouter>
    )
}

export default App
