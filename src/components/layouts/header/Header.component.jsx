import React, { useEffect, useState, Fragment } from "react"
import { Link } from "react-router-dom"
import "./Header.styles.scss"

import { GiHamburgerMenu } from "react-icons/gi"

import MovieNavigation from "../../movies/movieNavBar/MovieNavigationBar.component"
import MovieSearchBar from "../../movies/movieSearchBar/MovieSearchBar.component"
import SideBar from "../sidebar/SideBar.component"

const Header = () => {
	const [scrollY, setScrollY] = useState(window.pageYOffset)
	const [visible, setVisible] = useState(true)
	const [searchVisible, setSearchVisible] = useState(false)

	const handleScroll = () => {
		const currentScrollPosition = window.pageYOffset
		setVisible(scrollY > currentScrollPosition)
		setScrollY(currentScrollPosition)
	}

	useEffect(() => {
		document.addEventListener("scroll", handleScroll)
		return () => document.removeEventListener("scroll", handleScroll)
	})

	return (
		<Fragment>
			<div className={visible ? "visible" : "visible hidden"}>
				<header className="Header">
					<div className="header-left">
						<Link to="/" className="logo-and-text">
							<div className="logo-name">WHAT TO WATCH?</div>
							<div className="logo-pill"></div>
						</Link>
						<div
							className="header-burger"
							onClick={() => console.log("sidebar")}>
							<GiHamburgerMenu />
						</div>
					</div>
					<MovieNavigation
						toggleSearch={() => setSearchVisible(!searchVisible)}
					/>
				</header>
			</div>
			{searchVisible ? <MovieSearchBar /> : ""}
			<SideBar />
		</Fragment>
	)
}

export default Header
