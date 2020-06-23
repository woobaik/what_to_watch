import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"

import MovieNavigation from "../../movies/movieNavBar/MovieNavigationBar.component"
import HorizontalDivider from "../divider/HorizontalDivider.component.jsx"
import MovieSearchBar from "../../movies/movieSearchBar/MovieSearchBar.component"

const Header = () => {
	const [scrollY, setScrollY] = useState(window.pageYOffset)
	const [visible, setVisible] = useState(true)

	const handleScroll = () => {
		const currentScrollPosition = window.pageYOffset
		setVisible(scrollY > currentScrollPosition)
		setScrollY(currentScrollPosition)
	}

	useEffect(() => {
		document.addEventListener("scroll", handleScroll)
	})

	return (
		<div className={visible ? "visible" : "visible-hidden"}>
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
		</div>
	)
}

export default Header
