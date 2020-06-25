import React, { useState, useEffect } from "react"
import "./SideBar.style.scss"

import { Link } from "react-router-dom"
import { RiCloseCircleLine } from "react-icons/ri"
import { MdLocalMovies } from "react-icons/md"
import { FiMonitor } from "react-icons/fi"
import { BsPersonFill } from "react-icons/bs"

const SideBar = (props) => {
	const [closedSidebar, setClosedSideBar] = useState(!props.sidebarOpen)
	const [toggleMovie, setToggleMovie] = useState(false)
	const [toggleTvShow, setToggleTvShow] = useState(true)

	// handle sidebar close
	useEffect(() => {
		setClosedSideBar(!props.sidebarOpen)
	}, [props])

	const handleClose = () => {
		setClosedSideBar(true)
		props.handleSideBar()
	}

	// handle drawer open/close
	const handleDrawer = (e) => {
		const category = e.target.textContent
		if (category === "Movies") {
			setToggleMovie(!toggleMovie)
		} else if (category === "Tv Shows") {
			setToggleTvShow(!toggleTvShow)
			console.log(toggleTvShow)
		} else {
			return true
		}
	}

	return (
		<div className={`SideBar ${closedSidebar ? "closed" : ""}`}>
			<div className="sidebar-close-btn" onClick={() => handleClose()}>
				<RiCloseCircleLine />
			</div>
			<div className="sidebar-title">
				<Link to="/" className="logo-and-text">
					<div className="logo-name">WHAT TO WATCH?</div>
					<div className="logo-pill"></div>
				</Link>
			</div>
			<div className="sidebar-menu">
				<div className="sidebar-category">
					<MdLocalMovies /> <span onClick={(e) => handleDrawer(e)}>Movies</span>
					<ul
						className={`sidebar-category-menu ${toggleMovie ? "" : "hidden"}`}>
						<li>Popular</li>
						<li>Top Rated</li>
						<li>Upcoming</li>
						<li>Now Playing</li>
					</ul>
				</div>
				<div className="sidebar-category">
					<FiMonitor />
					<span onClick={(e) => handleDrawer(e)}>Tv Shows</span>
					<ul
						className={`sidebar-category-menu ${toggleTvShow ? "" : "hidden"}`}>
						<li>Popular</li>
						<li>Top Rated</li>
						<li>Upcoming</li>
						<li>Now Playing</li>
					</ul>
				</div>
				<div className="sidebar-category">
					<BsPersonFill />
					<span>People</span>
				</div>
			</div>
		</div>
	)
}

export default SideBar
