import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"

import MovieNavigation from "../../movies/movieNavBar/MovieNavigationBar.component"
import HorizontalDivider from "../divider/HorizontalDivider.component.jsx"
import MovieSearchBar from "../../movies/movieSearchBar/MovieSearchBar.component"

const Header = () => {
  return (
    <Fragment>
      <header className="Header">
        <Link to="" className="logo-and-text">
          <img
            src="../../../assets/images/562x385.png"
            alt="logo"
            className="logo"
          />
          <div className="logo-name">WHAT TO WATCH?</div>
        </Link>
        <div className="header-search"></div>
      </header>
      <MovieNavigation />
      <MovieSearchBar />
      <HorizontalDivider />
    </Fragment>
  )
}

export default Header
