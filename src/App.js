import './App.css';
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Leaderboard = require('./components/leaderboard.js');
var Switch = ReactRouter.Switch;
var Route = ReactRouter.Route;


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="App-header">
        <h1>Leaderboard</h1>
          <Switch>
            <Route exact path='/' component={Leaderboard} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
