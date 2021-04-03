import React from 'react'
import { BrowserRouter, Routes,  Link, HashRouter } from 'react-router-dom'


let Home = (props: any) => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to={'/'}>Home</Link> |{" "}
      <Link to={'dashboard'}>Dashboard</Link>
    </nav>
  </div>
)

let Dash = (props: any) => <div>Dash</div>

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Home path={'/'} />
        <Dash path={'dashboard'} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
