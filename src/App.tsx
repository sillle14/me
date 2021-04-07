import React from 'react'
import { Routes, HashRouter } from 'react-router-dom'

import Home from './components/pages/home'
import NavBar from './components/navbar'

const App = () => (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Home path="/"/>
        </Routes>
    </HashRouter>
)

export default App
