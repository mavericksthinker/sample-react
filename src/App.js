import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import UserDetails from "./components/UserDetails/UserDetails";

const GET_USER_ROUTE = 'https://jsonplaceholder.typicode.com/users';
const GET_USER_POST_ROUTE = 'https://jsonplaceholder.typicode.com/posts?userId=';

function App() {
  return (
      <div className="App">
        <main className="main-container">
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to='/users' />
              </Route>
              <Route exact path="/users">
                <Dashboard usersRoute={GET_USER_ROUTE}/>
              </Route>
              <Route exact path="/users/:userId">
                <UserDetails usersRoute={GET_USER_ROUTE} postsRoute={GET_USER_POST_ROUTE} />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
  );
}

export default App;
