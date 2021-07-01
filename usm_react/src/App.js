import './App.css';
import AllUsers from './components/AllUsers';
import Form from './components/Form';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Add">
            <Form />
          </Route>
          <Route path="/Update">
            <Form />
          </Route>
          <Route path="/">
            <AllUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
