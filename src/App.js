import React from 'react';
import './App.css';

import Header from './components/layouts/header/Header.component'
import MovieMainPage from './components/movies/movieMainPage/MovieMainPage.component'
import Footer from './components/layouts/footer/Footer.component'


function App() {
  return (
    <div className="App">
      <Header />
      <MovieMainPage />
      <Footer />
    </div>
  );
}

export default App;
