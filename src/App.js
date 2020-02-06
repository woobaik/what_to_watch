import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';



import Header from './components/layouts/header/Header.component'
import MovieMainPage from './components/movies/movieMainPage/MovieMainPage.component'
import CategoryDetailPage from './components/movies/movieCategoryDetail/MovieCategoryDetailPage.component'
import MovieDetailPage from './components/movies/movieDetailPage/MovieDetailPage.component'
import Footer from './components/layouts/footer/Footer.component'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MovieMainPage} />
          <Route exact path='/movies/:id' component={MovieDetailPage} />
          <Route exact path='/movies' component={CategoryDetailPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
