import { Routes, Route, HashRouter } from 'react-router-dom'
import { Theme, StyledEngineProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green'

import Home from './components/pages/home'
import NavBar from './components/navbar'
import Projects from './components/pages/projects'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        minHeight: '100%',
        width: '100%',
        boxSizing: 'border-box',
        background: green[100]
    }
})

const App = () => {

    const classes = useStyles()

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}><HashRouter><div className={classes.root}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                </Routes>
            </div></HashRouter></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App
