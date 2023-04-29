import { Routes, Route, HashRouter } from 'react-router-dom'
import { StyledEngineProvider, styled, ThemeProvider, createTheme } from '@mui/material/styles'
import green from '@mui/material/colors/green'

import Home from './components/pages/home'
import NavBar from './components/navbar'
import Projects from './components/pages/projects'
import RoadTrip from './components/pages/roadTrip'

const theme = createTheme();

const Root = styled('div')({
    position: 'absolute',
    minHeight: '100%',
    width: '100%',
    boxSizing: 'border-box',
    background: green[100]
})

const App = () => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}><HashRouter><Root>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="road-trip/*" element={<RoadTrip/>}/>
                </Routes>
            </Root></HashRouter></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App
