import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"
import { Button } from "react-bootstrap"

import SearchBar from "../../movies/movieSearchBar/MovieSearchBar.component"
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

        <div className="user-authenticate">
          <div className="user-button">
            <Button variant="outline-primary" size="sm">
              SIGN IN
            </Button>
          </div>

          <div className="user-button">
            <Button variant="outline-success" size="sm">
              SIGN UP
            </Button>
          </div>
        </div>
      </header>
      <MovieNavigation />
      <MovieSearchBar />
      <HorizontalDivider />
    </Fragment>
  )
}

export default Header
