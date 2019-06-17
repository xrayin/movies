import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
        <main className="container">
            <Switch>
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
