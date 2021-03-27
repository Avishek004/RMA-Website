import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import Home from './components/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
