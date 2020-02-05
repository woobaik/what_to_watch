import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';



import Header from './components/layouts/header/Header.component'
import MovieMainPage from './components/movies/movieMainPage/MovieMainPage.component'
import Footer from './components/layouts/footer/Footer.component'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MovieMainPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
