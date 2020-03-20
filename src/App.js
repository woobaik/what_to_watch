import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import "./App.css"

import ScrollToTop from "./components/tools/scrollToTop/ScrollToTop"
import Header from "./components/layouts/header/Header.component"
import MovieMainPage from "./components/movies/movieMainPage/MovieMainPage.component"
import CategoryDetailPage from "./components/movies/movieCategoryDetail/MovieCategoryDetailPage.component"
import MovieDetailPage from "./components/movies/movieDetailPage/MovieDetailPage.component"
import PeopleCategoryPage from "./components/people/popularPeople/PopularPeople.component"
import PeopleDetailPage from "./components/people/PeopleDetailPage/PeopleDetailPage.component"
import PeopleCastForShow from "./components/people/peopleCastForShow/PeopleCastForShow.component"
import FloatingBtn from "./components/layouts/floatingButton/FloatingBtn.component"
import Footer from "./components/layouts/footer/Footer.component"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/movies" component={CategoryDetailPage} />
            <Route exact path="/movies/:query" component={CategoryDetailPage} />
            <Route exact path="/tvs" component={CategoryDetailPage} />
            <Route
              exact
              path="/tv/:query/full-cast"
              component={PeopleCastForShow}
            />
            <Route exact path="/tvs/:query" component={CategoryDetailPage} />

            <Route exact path="/tv/:query" component={MovieDetailPage} />
            <Route
              exact
              path="/movie/:query/full-cast"
              component={PeopleCastForShow}
            />
            <Route exact path="/movie/:query" component={MovieDetailPage} />
            <Route exact path="/people" component={PeopleCategoryPage} />
            <Route exact path="/people/:query" component={PeopleDetailPage} />
            <Route path="/" component={MovieMainPage} />
          </Switch>
          <FloatingBtn />

          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
