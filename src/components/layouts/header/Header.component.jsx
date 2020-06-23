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
				<Link to="/" className="logo-and-text">
					<div className="logo-name">WHAT TO WATCH?</div>
					<div className="logo-pill"></div>
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
