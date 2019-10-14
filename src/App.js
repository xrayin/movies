import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
        <main className="container">
            <Switch>
                <Route path="/register" component={RegisterForm}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/movies/:id" component={MovieForm}/>
                <Route path="/movies" component={Movies} />
                <Route path="/customers" component={Customers}/>
                <Route path="/rentals" component={Rentals} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" exact to="/movies" />
                <Redirect to="/not-found" />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
