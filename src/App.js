import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';



import Header from './components/layouts/header/Header.component'
import MovieMainPage from './components/movies/movieMainPage/MovieMainPage.component'
import CategoryDetailPage from './components/movies/movieCategoryDetail/MovieCategoryDetailPage.component'
import MovieDetailPage from './components/movies/movieDetailPage/MovieDetailPage.component'
import Footer from './components/layouts/footer/Footer.component'


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/movies/:id' component={MovieDetailPage} />
            <Route exact path='/movies' component={CategoryDetailPage} />
            <Route path='/' component={MovieMainPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
