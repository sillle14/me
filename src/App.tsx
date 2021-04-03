import React from 'react'
import { Router, RouteComponentProps, Link } from '@reach/router'


let Home = (props: RouteComponentProps) => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="dashboard">Dashboard</Link>
    </nav>
  </div>
)

let Dash = (props: RouteComponentProps) => <div>Dash</div>

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
