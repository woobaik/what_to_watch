import React from "react"
import "./MovieNavigationBar.style.scss"

import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

const MovieNavigationBar = (props) => {
	return (
		<div className="Movie-navigation">
			<div className="dropdown-container">
				<Link className="nav-button" to="/movies" role="span">
					MOVIES
				</Link>
				<div className="dropdown-hidden-container">
					<Link to={"/movies"} className="dropdown-hidden-item">
						Popular
					</Link>
					<Link to={"/movies/top-rated"} className="dropdown-hidden-item">
						Top Rated
					</Link>
					<Link to={"/movies/upcoming"} className="dropdown-hidden-item">
						Upcoming
					</Link>
					<Link to={"/movies/now-playing"} className="dropdown-hidden-item">
						Now Playing
					</Link>
				</div>
			</div>
			<div className="dropdown-container">
				<Link className="nav-button" to="/tvs" role="span">
					TV SHOWS
				</Link>
				<div className="dropdown-hidden-container">
					<Link to={"/tvs"} className="dropdown-hidden-item">
						Popular
					</Link>
					<Link to={"/tvs/top-rated"} className="dropdown-hidden-item">
						Top Rated
					</Link>
					<Link to={"/tvs/on-the-air"} className="dropdown-hidden-item">
						On TV
					</Link>
					<Link to={"/tvs/airing-today"} className="dropdown-hidden-item">
						Airing Today
					</Link>
				</div>
			</div>
			<div className="dropdown-container">
				<Link className="nav-button" to="/people" role="span">
					People
				</Link>
				<div className="dropdown-hidden-container">
					<Link to={"/people"} className="dropdown-hidden-item">
						Popular People
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MovieNavigationBar
